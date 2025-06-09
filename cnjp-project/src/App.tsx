import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  // App 全局变量区
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };


  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar collapsed={collapsed}/>
      <MainContent />
    </>
  )
}

export default App
