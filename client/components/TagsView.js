import React, {useContext} from 'react';
import { TagsContext } from './LinksContainer';
import Tag from './Tag';

export const tags = [
    {_id: 1, tag_name: 'all', tag_color: 'green'},
    {_id: 2, tag_name: 'hooks', tag_color: 'yellow'},
    {_id: 3, tag_name: 'hooks best practice', tag_color: 'orange'},
    {_id: 4, tag_name: 'webpack', tag_color: null},
    {_id: 5, tag_name: 'hooks rules', tag_color: 'yellow'},
    {_id: 6, tag_name: 'react route', tag_color: null},
    {_id: 7, tag_name: 'express', tag_color: 'blue'},
    {_id: 8, tag_name: 'oath', tag_color: null},
    {_id: 9, tag_name: 'graphQl', tag_color: null},
    {_id: 10, tag_name: 'browser work', tag_color: null}
];

const TagsView = () => {
  const { currTag, changeTag } = useContext(TagsContext);
  
  return (
    <div className="tagsContainer">
         <ul className="tagsList">
             {tags.map((el) => {
                 return <li><Tag {...el} key={el._id} current={el._id === currTag} action={changeTag}/></li>
             })}
         </ul>
    </div>
  )
}

export default TagsView;