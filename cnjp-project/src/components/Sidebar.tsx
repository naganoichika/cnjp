// import { useState } from 'react';
import './Sidebar.css';
// import { FiMenu } from 'react-icons/fi';  // 收起按钮
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';  // 示例图标

type SidebarProps = {
  collapsed: boolean;
};

const Sidebar = ({collapsed}: SidebarProps) => {;

  const menuItems = [
    { icon: <FaHome />, label: '首页' },
    { icon: <FaUser />, label: '关于' },
    { icon: <FaProjectDiagram />, label: '项目' },
    { icon: <FaEnvelope />, label: '联系' },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header"></div>
        <ul className="menu">
            {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
                {item.icon}
                {!collapsed && <span className="label">{item.label}</span>}
            </li>
            ))}
        </ul>
    </div>
  );
};

export default Sidebar;
