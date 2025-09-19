// This is where you define the color palettes for your themes.
// To create a new "custom" theme, just modify the colors in the customTheme object.

export const lightTheme = {
  "--background-color": "#FFFFFF",
  "--text-color": "#333333",
  "--text-secondary": "#6a3131ff",
  "--primary-color": "#13c0c0ff",
  "--secondary-color": "#6d92b3ff",
  "--card-background": "#f8f9fa",
  "--border-color": "#dee2e6",
  "--hover-color": "#f1cacaff",
  "--logo-background": "#737070ff",
};

export const darkTheme = {
  "--background-color": "#222831",
  "--text-color": "#e2a20ee2",
  "--text-secondary": "#aeb3b3ff",
  "--primary-color": "#00ADB5",
  "--secondary-color": "#1dd3a3ff",
  "--card-background": "#000000",
  "--border-color": "#b5b4b4ff",
  "--hover-color": "#f1cacaff",
  "--logo-background": "#F5EDED",
};

// Your custom theme! Just change these color codes to see the site update.
export const customTheme = {
  "--background-color": "#F0F8FF", // Alice Blue
  "--text-color": "#2F4F4F", // Dark Slate Gray
  "--text-secondary": "#562a2aff",
  "--primary-color": "#d28476ff", // Tomato
  "--secondary-color": "#4682B4", // Steel Blue
  "--card-background": "#FFF5E1", // Papaya Whip
  "--border-color": "#D3D3D3", // Light Gray
  "--hover-color": "#f1cacaff",
  "--logo-background": "#9f9973ff",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
};
