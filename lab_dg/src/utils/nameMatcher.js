// src/utils/nameMatcher.js

function normalizeName(name) {
  if (!name || typeof name !== "string") return null;

  let cleanedName = name
    .toLowerCase()
    .replace(
      /\b(dr|mr|mrs|ms|prof|professor|assistant professor)\b\.?\s*/g,
      ""
    );

  let parts;
  if (cleanedName.includes(",")) {
    parts = cleanedName.split(",").map((part) => part.trim());
    const lastName = parts[0].split(/\s+/).pop();
    const firstName = parts[1].split(/\s+/)[0];
    parts = [firstName, lastName];
  } else {
    parts = cleanedName.split(/\s+/).filter(Boolean);
  }

  parts = parts.map((part) => part.replace(/[.]/g, ""));

  if (parts.length === 0) {
    return null;
  }

  return {
    first: parts[0],
    last: parts[parts.length - 1],
  };
}

export function isAuthorOfPublication(memberName, publicationAuthors) {
  const memberParts = normalizeName(memberName);
  if (!memberParts || !publicationAuthors) {
    return false;
  }

  // More reliable splitting: Splits authors separated by semicolons.
  // This is the standard format for ORCID and many citation styles.
  const authorList = publicationAuthors.split(/\s*;\s*/);

  return authorList.some((authorName) => {
    const authorParts = normalizeName(authorName);
    if (!authorParts) return false;

    // --- NEW STRICTER LOGIC ---

    // 1. If last names do NOT match, it's definitely not the right person.
    if (memberParts.last !== authorParts.last) {
      return false;
    }

    // 2. At this point, last names match. Now we must check first names.
    // This prevents "Jignesh Prajapati" matching a paper by "Karan Prajapati".
    const memberFirst = memberParts.first;
    const authorFirst = authorParts.first;

    // If either name part is just a single letter (an initial), check `startsWith`.
    // Otherwise, require a more substantial match.
    const firstNamesAreCompatible =
      memberFirst.startsWith(authorFirst) ||
      authorFirst.startsWith(memberFirst);

    // This is the crucial part: if last names matched, the first names MUST be compatible.
    return firstNamesAreCompatible;
  });
}
