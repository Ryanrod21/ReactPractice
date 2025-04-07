import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>
      <ul style={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#333',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
};

export default Navbar;
