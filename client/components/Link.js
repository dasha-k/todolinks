import React, { useState, useEffect } from 'react';
import StarSvg from './svg/star.svg';
import CheckSvg from './svg/check.svg';
import DeleteSvg from './svg/close.svg';

const Link = ({_id, link, link_name, is_read, is_important}) => {
    const source = "hackernoon.com";
    const isReadClass = is_read ? "btn-svg linkItem__read active" : "btn-svg linkItem__read";
    const isFavClass = is_important ? "btn-svg linkItem__fav active" : "btn-svg linkItem__fav";
    return (
        <li className="linkItem">
            <a target="_blank" href={link}  className="linkItem__link">
                <button className="btn-svg linkItem__delete"><DeleteSvg /></button>
                <a target="_blank" href={link}>
                    <span>{source}</span>
                    <span>{link_name}</span>
                </a>
                <div className="linkItem__tags">
                    <button aria-label="Mark as read" className={isReadClass}>
                        <CheckSvg />
                    </button>
                    <button aria-label="Mark as important" className={isFavClass}>
                        <StarSvg />
                    </button>
                </div>
            </a>
        </li>
    )
}

export default Link;