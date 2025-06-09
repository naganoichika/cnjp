// Navbar.jsx
import './Navbar.css'; // 我们稍后给它加上CSS样式
import { FiMenu } from 'react-icons/fi';

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({toggleSidebar}: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <span className="navbar-logo">王偉さんのWeb</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于我</a></li>
        <li><a href="#projects">项目</a></li>
        <li><a href="#contact">联系</a></li>
        <li><a href="#contact">联系</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
