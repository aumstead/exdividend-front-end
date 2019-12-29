import React, { Component } from 'react';

import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo"></div>
                <p className="logo__name">exdividend.net</p>
            </div>
        )
    }
}

export default NavBar;