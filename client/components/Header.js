import React from 'react';

const appHeader = "Todolinks";

const Header = () => {
    return (
        <header>
            <h1 className="header__title">{appHeader}</h1>
            <span>Hello, User</span>
        </header>
    )
}

export default Header;