import React from 'react';

import {tags} from './TagsView';
import Tag from './Tag';

const TagsModal = ({tagId, updateLinkWithTag}) => (
  <div className="tagsPopup">
      <ul className="tagsPopup__list">
        {tags.map((el) => {
          return <li><Tag {...el} key={el._id} current={el._id === tagId} action={updateLinkWithTag}/></li>
        })}
      </ul>
  </div>
)

export default TagsModal;