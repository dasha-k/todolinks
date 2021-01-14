import React from 'react';

import DeleteSvg from './svg/close.svg';
import TagsPopup from './TagsPopup';
import Tag from './Tag';

import useToggle from '../utils/useToggle';

const LinkCard = ({linkObj, optimistic, deleteLink, updateLink}) => {
  const {link_name, link_src, tag_id, tag_color, tag_name, _id} = linkObj;
  const [isModal, toggleIsModal] = useToggle();

  const source = "source.com";

  const handleDeleteLink = (event) => {
    event.stopPropagation();
    deleteLink(_id);
  }

  const handleUpdateLink = (tagId) => {
    const linkObject = {
        ...linkObj,
        tag_id: tagId,
    }
    toggleIsModal();
    updateLink(_id, linkObject);
  }

  return (
    <div className={optimistic ? 'linkCard optimistic': 'linkCard'}>
        <button className="btn-svg linkCard__delete" onClick={handleDeleteLink}><DeleteSvg /></button>
        <a target="_blank" href={link_src}  className="linkCard__link">
            <span className="linkCard__link-source">{source}</span>
            <span>{link_name}</span>
        </a>   
        <div className="linkCard__actions">
            {tag_id ? <Tag tag_name={tag_name} tag_color={tag_color} _id={tag_id} action={toggleIsModal}/> : <button onClick={toggleIsModal}>Add tag</button>}
        </div>
        {isModal && <TagsPopup tagId={tag_id} updateLinkWithTag={handleUpdateLink}/>}
    </div>
  )
}

export default LinkCard;