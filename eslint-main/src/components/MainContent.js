import React from 'react';

function MainContent() {
    const items = ['Item1', 'Item2', 'Item3'];
    
    return (
        <div>
            <h1>Main Content</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MainContent;