import React, { useState } from 'react';

const filters = ['all', 'read', 'important'];

const Filter = ({filterName, current}) => {
    const className = filterName === current ? 'filterLink active' : 'filterLink';
    return <li className='filterItem'><a className={className}>{filterName}</a></li>
}

const Filters = () => {
    const [currFilter, setCurrFilter] = useState('all');
    return (
        <>
            <h4>Filter by</h4>
            <ul className="filtersList">
                {filters.map((el, index) => {
                    return <Filter filterName={el} current={currFilter} key={el + index}/>
                })}
            </ul>
        </>
    )
}

export default Filters;