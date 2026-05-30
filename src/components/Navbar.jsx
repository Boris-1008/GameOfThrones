import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: '首頁' },
  { to: '/characters', label: '人物' },
  { to: '/houses', label: '家族' },
  { to: '/regions', label: '地圖地區' },
  { to: '/about', label: '關於' },
];

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="回到首頁">
        <span className="brand-mark">G</span>
        <span>
          <strong>權力遊戲導覽</strong>
          <small>世界觀圖鑑</small>
        </span>
      </NavLink>
      <nav className="nav-links" aria-label="主要導覽">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
