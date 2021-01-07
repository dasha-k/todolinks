import React, { useState } from 'react';

import DeleteSvg from './svg/close.svg';

const LinkCard = ({link_name, link_src, tag_id, _id, optimistic}) => {

    const source = "source.com";

    // const linkUpdate = (event, tag) => {
    //     event.stopPropagation();
    //     const linkObject = {
    //         is_read: false,
    //         is_important: false
    //     }
    //     linkObject[tag] = true;

    //     fetch(`api/link?id=${_id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "Application/JSON"
    //         },
    //         body: JSON.stringify(linkObject)
    //     })
    //     .then((data) => {
    //         console.log('link update', tag, data);
    //         window.history.go('/');
    //     })
    //     .catch(err => console.log('Link.update: link update: ERROR: ', err));
    // }

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
                <div className="linkCard__tags">
                    
                </div>
        </div>
    )
}

export default LinkCard;