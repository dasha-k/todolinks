import React from 'react';

const Tag = ({tag_name, tag_color, _id, current = false, action}) => {
 
    const tagColor = tag_color || 'grey';
    const style= {
      color: current ? 'white' : tagColor,
      borderColor: tagColor,
      background: current ? tagColor : 'transparent',
    }
  
    return (
      <span className="tagItem">
        <button 
          className="tagLink" 
          style={style}
          onClick={() => action(_id)}
        >
          {tag_name}
        </button>
      </span>
    )
}

export default Tag;