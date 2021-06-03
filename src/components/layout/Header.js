import React from 'react';
import {Link} from 'react-router-dom';
// functional component doest have state, dont render as doesnt extend componenet and returns just like classbased compnent
function Header() {
    return (
        <header style={headerStyle}>
            <h1>TODO LIST</h1>
            <Link style={linkStyle} to="/">HOME</Link> | <Link style={linkStyle} to="/about">ABOUT</Link> {/*similar to href*/}
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}
export default Header;