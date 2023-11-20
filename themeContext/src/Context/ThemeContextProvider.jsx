// import React, { createContext, useState } from 'react';

// // Create a context for theme
// export const ThemeContext = createContext();

// export default function ThemeContextProvider({ children }) {
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // Function to toggle the theme
//   const toggleTheme = () => {
//     setIsDarkTheme((prevTheme) => !prevTheme);
//   };

//   // Provide the theme state and toggle function to the children components
//   return (
//     <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Provide the theme state and toggle function to the children components
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
