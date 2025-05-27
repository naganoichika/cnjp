import React, { useState, useRef, useEffect } from 'react';
import NavItem from './NavItem.tsx';
import './BottomNavbar.css';

function BottomNavbar({ items }) {
  const navbarRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, items.length);
  }, [items]);

  const handleMouseEnter = (event) => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const rect = navbar.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;

    items.forEach((item, index) => {
      const itemRef = itemRefs.current?.[index];
      if (itemRef) {
        const itemRect = itemRef.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(mouseX - itemCenter);
        const scale = Math.max(1, 1.2 - distance / 100); // 调整缩放比例和影响范围
        itemRef.style.transform = `scale(${scale})`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (itemRefs.current) {
      itemRefs.current.forEach(ref => {
        if (ref) {
          ref.style.transform = 'scale(1)';
        }
      });
    }
  };

  const handleClick = (index, onClick) => {
    setActiveItemIndex(index);
    if (onClick) {
      onClick();
    }
  };

  return (
    <nav className="bottom-navbar" ref={navbarRef} onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {items.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          label={item.label}
          onClick={() => handleClick(index, item.onClick)}
          ref={el => (itemRefs.current?.[index] = el)}
          className={activeItemIndex === index ? 'active' : ''}
        />
      ))}
    </nav>
  );
}

export default BottomNavbar;