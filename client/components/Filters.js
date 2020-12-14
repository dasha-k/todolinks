import React, { useState } from 'react';

const filters = ['all', 'read', 'important'];

const Filter = ({filterName, current, setCurrFilter}) => {
    console.log(filterName, current);
    const className = filterName === current ? 'filterLink active' : 'filterLink';

    const handleClick = (event) => {
        event.preventDefault();
        console.log('clicked', filterName);
        setCurrFilter(filterName);
    } 
    return <li className='filterItem'><a className={className} onClick={handleClick}>{filterName}</a></li>
}

const Filters = ({currFilter, setCurrFilter}) => {
    
    return (
        <div className="filtersContainer">
            <span className="filtersHeader">Filter by:</span>
            <ul className="filtersList">
                {filters.map((el, index) => {
                    return <Filter filterName={el} current={currFilter} setCurrFilter={setCurrFilter} key={el + index}/>
                })}
            </ul>
        </div>
    )
}

export default Filters;