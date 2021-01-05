import React from 'react';
import Filters from './Filters';

const appHeader = "Todolinks";

const Header = ({currFilter, setCurrFilter}) => {
    return (
        <header>
            <h1>{appHeader}</h1>
            <Filters currFilter={currFilter} setCurrFilter={setCurrFilter}/>
        </header>
    )
}

export default Header;