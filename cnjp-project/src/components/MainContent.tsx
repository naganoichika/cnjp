import './MainContent.css';
import TestComponent from '../test/test';
// File: MainContent.jsx

const MainContent = () => {


    
    return (
        <div className="main-content">
            <h1>Welcome to Main Content</h1>
            <p>This is the main content area of your application.</p>
            <TestComponent />
        </div>
    );
};

export default MainContent;