// src/hooks/usePublicationData.js
import { useState, useEffect } from "react";
import { fetchPublicationsForOrcid } from "../services/orcidService";

export function usePublicationData(orcidIds) {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This effect runs whenever the list of orcidIds changes
    const fetchAllPublications = async () => {
      // If the list of IDs to fetch is empty, do nothing.
      if (!orcidIds || orcidIds.length === 0) {
        setPublications([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Create a fetch promise for each ORCID iD
        const promises = orcidIds.map((id) => fetchPublicationsForOrcid(id));

        const resultsPerAuthor = await Promise.all(promises);
        const combinedWorks = resultsPerAuthor.flat();

        // De-duplicate publications using the DOI link or internal ID
        const uniqueWorksMap = new Map();
        combinedWorks.forEach((work) => {
          const key = work.link.startsWith("https://doi.org")
            ? work.link
            : work.id;
          if (!uniqueWorksMap.has(key)) {
            uniqueWorksMap.set(key, work);
          }
        });

        // Sort the final unique list by year
        const sortedWorks = Array.from(uniqueWorksMap.values()).sort(
          (a, b) => (b.year || 0) - (a.year || 0)
        );

        setPublications(sortedWorks);
      } catch (err) {
        console.error("Critical error during publication fetching:", err);
        setError("Could not fetch publications.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllPublications();
  }, [orcidIds]); // The hook re-runs if this array of IDs changes

  return { publications, loading, error };
}
