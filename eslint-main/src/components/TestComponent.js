import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
    return <nav>{props.title}</nav>;
}

// PropTypesでpropsの型チェックを追加します
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

const MainContent = () => {
    const items = ['Item1', 'Item2', 'Item3'];
    return (
        <div>
            <h1>Main Content</h1>
            <ul>
                {/* key属性がない状態 */}
                {items.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export { Navbar, MainContent };
