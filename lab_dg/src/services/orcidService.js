// This helper function extracts the raw ORCID API data into our clean format.
const extractData = (work) => {
  const id = work["put-code"].toString();
  const title = work.title?.title?.value || "No title available";
  const journal = work["journal-title"]?.value || "";
  const year = work["publication-date"]?.year?.value || "N/A";
  const type = work.type || "Undefined";

  const doiData = (work["external-ids"]["external-id"] || []).find(
    (extId) => extId["external-id-type"] === "doi"
  );
  const link = doiData
    ? `https://doi.org/${doiData["external-id-value"]}`
    : "#";

  const authors = (work.contributors?.contributor || [])
    .map((c) => c["credit-name"]?.value)
    .filter(Boolean)
    .join(", ");

  return { id, title, journal, year, type, link, authors };
};

// This is our main, reusable function for fetching publications for a single ORCID iD.
export const fetchPublicationsForOrcid = async (orcidId) => {
  if (!orcidId) return [];

  try {
    // 1. Get the summary to find all 'put-codes' for the works
    const summaryUrl = `https://pub.orcid.org/v3.0/${orcidId}/works`;
    const summaryResponse = await fetch(summaryUrl, {
      headers: { Accept: "application/json" },
    });
    if (!summaryResponse.ok) return [];

    const summaryData = await summaryResponse.json();
    const putCodes = summaryData.group
      .map((item) => item["work-summary"][0]["put-code"])
      .filter(Boolean);

    if (putCodes.length === 0) return [];

    // 2. Fetch the full work details in chunks of 50 for efficiency
    const chunkSize = 50;
    const chunkPromises = [];
    for (let i = 0; i < putCodes.length; i += chunkSize) {
      const chunk = putCodes.slice(i, i + chunkSize);
      const bulkUrl = `https://pub.orcid.org/v3.0/${orcidId}/works/${chunk.join(
        ","
      )}`;

      chunkPromises.push(
        fetch(bulkUrl, { headers: { Accept: "application/json" } })
          .then((res) => (res.ok ? res.json() : Promise.reject(`Chunk failed`)))
          .then((data) => data.bulk.map((item) => item.work).filter(Boolean))
      );
    }

    // 3. Wait for all chunk requests to complete and flatten the results
    const chunkedResults = await Promise.all(chunkPromises);
    const works = chunkedResults.flat();

    // 4. Transform the raw API data into our clean, consistent format
    return works.map(extractData);
  } catch (e) {
    console.error(`Failed to fetch publications for ${orcidId}`, e);
    return []; // Return an empty array on error
  }
};
