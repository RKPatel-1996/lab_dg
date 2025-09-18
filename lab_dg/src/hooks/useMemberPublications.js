// src/hooks/useMemberPublications.js
import { useState, useEffect } from "react";
// Import our new service function
import { fetchPublicationsForOrcid } from "../services/orcidService";

const getOrcidId = (orcidUrl) => {
  if (!orcidUrl || typeof orcidUrl !== "string") return null;
  const parts = orcidUrl.split("/");
  return parts[parts.length - 1] || orcidUrl;
};

export function useMemberPublications(orcidUrl) {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const orcidId = getOrcidId(orcidUrl);
    if (!orcidId) {
      setPublications([]);
      return;
    }

    const fetchPubs = async () => {
      setLoading(true);
      setError(null);
      try {
        // Here's the magic! We call our new, fast service function.
        const results = await fetchPublicationsForOrcid(orcidId);

        // Sort the results by year descending
        results.sort((a, b) => (b.year || 0) - (a.year || 0));

        setPublications(results);
      } catch (e) {
        console.error("Failed to fetch member publications:", e);
        setError("Could not load publications for this member.");
      } finally {
        setLoading(false);
      }
    };

    fetchPubs();
  }, [orcidUrl]);

  return { publications, loading, error };
}
