import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContextProvider'; // Import the ThemeContext
import User from './User'; // Import the User component
import userData from '../db.json'; // Import user data

export const Dashboard = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div data-testid="dashboard-cont" style={{ backgroundColor: isDarkTheme ? 'black' : 'white' }}>
      <select data-testid="select-theme" onChange={toggleTheme}>
        <option>Light Theme</option>
        <option>Dark Theme</option>
      </select>
      {userData.map((user) => (
        <User key={user.id} isDarkTheme={isDarkTheme} user={user} />
      ))}
    </div>
  );
};
