

const Navbar = () => {
  
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      background: '#333',
      color: '#fff',
    },
    logo: {
      margin: 0,
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '16px',
    },
  };




return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>TheGamerHub</h2>
      <ul style={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
      </ul>

    </nav>
  );
};


export default Navbar;
