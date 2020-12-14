import React, { useState, useEffect } from 'react';
import StarSvg from './svg/star.svg';
import CheckSvg from './svg/check.svg';
import DeleteSvg from './svg/close.svg';

const Link = ({_id, link, link_name, is_read, is_important}) => {
    //console.log(link, _id);
    const source = "source.com";
    const isReadClass = is_read ? "btn-svg linkItem__read active" : "btn-svg linkItem__read";
    const isFavClass = is_important ? "btn-svg linkItem__fav active" : "btn-svg linkItem__fav";

    const linkUpdate = (event, tag) => {
        event.stopPropagation();
        const linkObject = {
            is_read: false,
            is_important: false
        }
        linkObject[tag] = true;

        fetch(`api/link?id=${_id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(linkObject)
        })
        .then((data) => {
            console.log('link update', tag, data);
            window.history.go('/');
        })
        .catch(err => console.log('Link.update: link update: ERROR: ', err));
    }

    const linkDelete = (event) => {
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
        <li className="linkItem">
            <button className="btn-svg linkItem__delete" onClick={linkDelete}><DeleteSvg /></button>
            <a target="_blank" href={link}  className="linkItem__link">
                <span className="linkItem__link-source">{source}</span>
                <span>{link_name}</span>
            </a>   
                <div className="linkItem__tags">
                    <button aria-label="Mark as read" className={isReadClass} onClick={(event) => linkUpdate(event, 'is_read')}> 
                        <CheckSvg />
                    </button>
                    <button aria-label="Mark as important" className={isFavClass} onClick={(event) => linkUpdate(event, 'is_important')}>
                        <StarSvg />
                    </button>
                </div>
        </li>
    )
}

export default Link;