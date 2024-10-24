import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';


function App() {
    return (
        <div>
            <Navbar title="My Navbar" />
            <MainContent />
        </div>
    );
}

export default App;