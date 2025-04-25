import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  const styles = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return (
    <div style={styles}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <ThemeToggleButton />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
