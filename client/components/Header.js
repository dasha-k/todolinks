import React from 'react';
import Filters from './Filters';
import AddCard from './AddCard';

const appHeader = "Todolinks";

const Header = ({currFilter, setCurrFilter}) => {
    return (
        <header>
            <h1>{appHeader}</h1>
            <Filters currFilter={currFilter} setCurrFilter={setCurrFilter}/>
            <AddCard />
        </header>
    )
}

export default Header;