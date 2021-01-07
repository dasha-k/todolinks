import React from 'react';

const tags = [
    {_id: 1, tag_name: 'all', tag_color: 'green'},
    {_id: 2, tag_name: 'hooks', tag_color: 'orange'},
    {_id: 3, tag_name: 'hooks best practice', tag_color: 'yellow'},
    {_id: 4, tag_name: 'webpack', tag_color: null},
    {_id: 5, tag_name: 'hooks rules', tag_color: 'yellow'},
    {_id: 6, tag_name: 'react route', tag_color: null},
    {_id: 7, tag_name: 'express', tag_color: 'blue'},
    {_id: 8, tag_name: 'oath', tag_color: null},
    {_id: 9, tag_name: 'graphQl', tag_color: null},
    {_id: 10, tag_name: 'browser work', tag_color: null}
];

const Tag = ({tag_name, tag_color, _id}) => {
  const tagColor = tag_color ? tag_color : 'grey';
  const style= {
    color: tagColor,
    borderColor: tagColor,
    background: 'transparent',
  }

  return (
    <li style={style} className="tagItem">
      <a className="tagLink">{tag_name}</a>
    </li>
  )
}

const TagsView = () => {
    
    return (
        <div className="tagsContainer">
            <ul className="tagsList">
                {tags.map((el) => {
                    return <Tag {...el} key={el._id}/>
                })}
            </ul>
        </div>
    )
}

export default TagsView;