import React from 'react';
import Filters from './Filters';
import AddCard from './AddCard';

const appHeader = "Todolinks";

const Header = () => {
    return (
        <header>
            <h1>{appHeader}</h1>
            <Filters />
            <AddCard />
        </header>
    )
}

export default Header;