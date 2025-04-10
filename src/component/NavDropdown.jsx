import { useState } from 'react';
import '../navbar.css'


export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    
    const menuItemStyle = {
      padding: '8px 12px',
      cursor: 'pointer',
      borderBottom: '1px solid #eee',
    };

  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        Choose an option
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'red',
            border: '1px solid #ccc',
            padding: 0,
            margin: 0,
            listStyle: 'none',
            width: '100%',
            zIndex: 10,
          }}
        >
          <li style={menuItemStyle}>Apple</li>
          <li style={menuItemStyle}>Banana</li>
          <li style={menuItemStyle}>Orange</li>
        </ul>
      )}
    </div>
  );
}


