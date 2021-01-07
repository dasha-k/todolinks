import React, { useState, useCallback } from 'react';

import DeleteSvg from './svg/close.svg';
import TagsPopup from './TagsPopup';
import Tag from './Tag';

const LinkCard = ({link_name, link_src, tag_id, tag_color, tag_name, _id, optimistic}) => {
  const [tagsModal, setTagsModal] = useState(false);

  const toggleTagsModal = useCallback(() => {
    setTagsModal(tagsModal => !tagsModal);
  }, []);

    const source = "source.com";

    const updateLinkWithTag = (tagId) => {
      console.log('update link', tagId);
        const linkObject = {
          tag_id: tagId,
        }

        fetch(`api/link?id=${_id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(linkObject)
        })
        .then((data) => {
            console.log('link update', tagId, data);
            window.history.go('/');
        })
        .catch(err => console.log('Link.update: link update: ERROR: ', err));
    }

    const deleteLink = (event) => {
      event.stopPropagation();
      fetch(`api/link?id=${_id}`, {
          method: 'DELETE'
      })
      .then((data) => {
          console.log('link delete', data);
          window.history.go('/');
      })
      .catch(err => console.log('Link.update: link update: ERROR: ', err));
    }

    return (
        <div className={optimistic ? 'linkCard optimistic': 'linkCard'}>
            <button className="btn-svg linkCard__delete" onClick={deleteLink}><DeleteSvg /></button>
            <a target="_blank" href={link_src}  className="linkCard__link">
                <span className="linkCard__link-source">{source}</span>
                <span>{link_name}</span>
            </a>   
            <div className="linkCard__actions">
                {/* <button>Copy link</button> */}
                {tag_id ? <Tag tag_name={tag_name} tag_color={tag_color} _id={tag_id} action={toggleTagsModal}/> : <button onClick={toggleTagsModal}>Add tag</button>}
            </div>
            {tagsModal && <TagsPopup linkId={_id} tagId={tag_id} updateLinkWithTag={updateLinkWithTag}/>}
        </div>
    )
}

export default LinkCard;