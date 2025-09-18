// src/data/resources.js

// For YouTube videos, you only need the ID from the URL
// Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID is "dQw4w9WgXcQ"
export const youtubeVideos = [
  {
    id: "yt1",
    title:
      "MOLECULAR DOCKING in UCSF CHIMERA by VINA Plugin from Scratch in Linux",
    description: "Learn to use vina anc chimera for molecular docking",
    embedId: "CHY3yK2YaCM",
  },
  {
    id: "yt2",
    title:
      "Understand Linux OS for long time Windows user || Ubuntu 22.0 Vs Windows 11",
    description:
      "Breakdown of the differences between open-source operating systems and the proprietary Windows operating system.",
    embedId: "AVHtuOLUI4E",
  },
];

// For documents, place them in the `public/documents` folder
export const protocols = [
  {
    id: "doc1",
    title: "Standard Operating Protocol for PCR",
    description:
      "The latest version of our lab's SOP for polymerase chain reaction.",
    url: "/documents/sop_pcr.pdf",
  },
  {
    id: "doc2",
    title: "Lab Safety Guidelines",
    description:
      "Essential safety information for all lab members and visitors.",
    url: "/documents/lab_safety.pdf",
  },
];

export const githubRepos = [
  {
    id: "gh1",
    title: "GROMACS files templates",
    description: "Files needed for Gromacs MD simulation.",
    url: "https://github.com/DweipayanG/GROMACS-Protein-Ligand",
  },
  {
    id: "gh2",
    title: "Multi ligand docking",
    description: "Files and scripts needed for multi ligand docking.",
    url: "https://github.com/DweipayanG/Multiple_Ligand_Docking_Vinna",
  },
];

export const communityLinks = [
  {
    id: "cl1",
    title: "National Center for Biotechnology Information (NCBI)",
    description: "A key resource for bioinformatics databases and tools.",
    url: "https://www.ncbi.nlm.nih.gov/",
  },
  {
    id: "cl2",
    title: "Addgene",
    description: "A nonprofit plasmid repository for the research community.",
    url: "https://www.addgene.org/",
  },
];

// Use 'type' to distinguish between 'video' and 'paper'
export const highlightedContent = [
  {
    id: "resource1",
    type: "paper",
    title:
      "MurG as a potential target of quercetin in Staphylococcus aureus supported by evidence from subtractive proteomics and molecular dynamics",
    description:
      "Our recent publication in Scientific Reports exploring a novel target for S. aureus organism.",
    url: "https://www.nature.com/articles/s41598-025-90395-4", // Link to the paper
  },
  {
    id: "h2",
    type: "video",
    title: "Basics of using linux",
    description: "Learn the most basic commands for dealing with linux.",
    embedId: "Ozzsl6Vq30k",
  },
];
