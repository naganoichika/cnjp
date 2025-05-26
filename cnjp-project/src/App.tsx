// import { useState } from 'react';
import './App.css';
import BottomNavbar from './components/BottomNavbar';

// 引入你需要的图标（这里仅为示例）
const HomeIcon = () => <span>🏠</span>;
const SearchIcon = () => <span>🔍</span>;
const SettingsIcon = () => <span>⚙️</span>;


function App() {
  const navItems = [
    {
      icon: <HomeIcon />,
      label: '首页',
      onClick: () => console.log('点击了首页')
    },
    {
      icon: <SearchIcon />,
      label: '搜索',
      onClick: () => console.log('点击了搜索')
    },
    {
      icon: <SettingsIcon />,
      label: '设置',
      onClick: () => console.log('点击了设置')
    },
  ];

  return (
    <>
      <BottomNavbar items={navItems} />
    </>
  )
}

export default App
