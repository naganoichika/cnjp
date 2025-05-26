import React, { forwardRef } from 'react';
import './NavItem.css'; // 稍后创建样式文件


const NavItem = forwardRef(({ icon, label, onClick, className = '' }, ref) => {
  return (
    <div
      className={`nav-item ${className}`}
      ref={ref}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
});

export default NavItem;