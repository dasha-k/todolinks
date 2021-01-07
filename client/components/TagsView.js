import React, { useState } from 'react';

const tags = ['all', 'read', 'important'];

const Tag = ({}) => {
   return (
       <div>tag</div>
   )
}

const TagsView = ({currTag, setCurrTag}) => {
    
    return (
        <div className="filtersContainer">
            <span className="filtersHeader">Filter by:</span>
            <ul className="filtersList">
                {tags.map((el, index) => {
                    return <Tag key={el + index}/>
                })}
            </ul>
        </div>
    )
}

export default TagsView;