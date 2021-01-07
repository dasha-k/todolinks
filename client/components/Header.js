import React from 'react';
import Filters from './Filters';

const appHeader = "Todolinks";

const Header = ({currFilter, setCurrFilter}) => {
    return (
        <header>
            <h1 className="header__title">{appHeader}</h1>
            <span>Hello, User</span>
        </header>
    )
}

export default Header;