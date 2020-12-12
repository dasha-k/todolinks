import React, { useState } from 'react';

const filters = ['all', 'read', 'important'];

const Filter = ({filterName, current}) => {
    const className = filterName === current ? 'filterLink active' : 'filterLink';
    return <li className='filterItem'><a className={className}>{filterName}</a></li>
}

const Filters = () => {
    const [currFilter, setCurrFilter] = useState('all');
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