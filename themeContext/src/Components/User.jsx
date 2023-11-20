import React, { useContext } from 'react';
// import { ThemeContext } from '../Context/ThemeContextProvider'; // Import the ThemeContext

export default function User({ isDarkTheme, user }) {
  // const { toggleTheme } = useContext(ThemeContext);

  // Determine the background and text color based on the theme
  const userStyles = {
    backgroundColor: isDarkTheme ? 'black' : 'white',
    color: isDarkTheme ? 'white' : 'black',
  };

  // Determine the accent color for the range input
  const accentColor = isDarkTheme ? 'yellow' : 'blue';

  return (
    <div data-testid="user" style={userStyles}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <input data-testid="level" type="range" style={{ accentColor: accentColor }} />
    </div>
  );
}
