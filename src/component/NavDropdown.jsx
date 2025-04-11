import { useState, useEffect } from 'react';
import '../navbar.css';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeColor, setColor] = useState('');

  useEffect(() => {
    if (themeColor) {
      document.body.style.backgroundColor = themeColor;
    }
  }, [themeColor]);

  const menuItemStyle = {
    padding: '18px 22px',
    cursor: 'pointer',
    borderBottom: '1px solid #eee',
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Choose an option
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li
            className="theme-red"
            style={menuItemStyle}
            onClick={() => setColor('red')}
          >
            Red
          </li>
          <li
            className="theme-blue"
            style={menuItemStyle}
            onClick={() => setColor('blue')}
          >
            Blue
          </li>
          <li
            className="theme-green"
            style={menuItemStyle}
            onClick={() => setColor('green')}
          >
            Green
          </li>
          <li
            className="theme-yellow"
            style={menuItemStyle}
            onClick={() => setColor('yellow')}
          >
            Yellow
          </li>
          <li
            className="theme-light"
            style={menuItemStyle}
            onClick={() => setColor('white')}
          >
            Light
          </li>
          <li
            className="theme-dark"
            style={menuItemStyle}
            onClick={() => setColor('black')}
          >
            Dark
          </li>
          <li
            style={{ ...menuItemStyle, display: 'flex', alignItems: 'center' }}
          >
            Custom:&nbsp;
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              style={{ border: 'none', background: 'none', cursor: 'pointer' }}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
