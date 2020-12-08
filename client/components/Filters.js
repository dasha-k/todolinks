import React from 'react';

const filters = ['all', 'read', 'starred'];

const Filter = ({filterName}) => {
    return <li>{filterName}</li>
}

const Filters = () => {
    return (
        <>
            <h4>Filter by</h4>
            <ul>
                {filters.map(el => {
                    return <Filter filterName={el}/>
                })}
            </ul>
        </>
    )
}

export default Filters;