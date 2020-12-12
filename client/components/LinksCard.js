import React, { useState } from 'react';
import Link from './Link.js';

import DeleteSvg from './svg/close.svg';

const AddLink = ({card_id}) => {
    const [link, setLink] = useState('');
    const [isForm, setIsForm] = useState(false);

    const handleChange = (event) => {
        setLink(event.target.value);
    }

    const handlePaste = (event) => {
        const link = event.clipboardData.getData('text/plain')
        setLink(link);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // retrive title from link somehow 
        const linkObject = {
            link_name: "Fake title",
            link,
            is_read: false,
            is_important: false,
            card_id
        }

        fetch('/api/link', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(linkObject)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setLink('');
            setIsForm(false);
        })
        .catch(err => console.log('CreateLink fetch /api/link: ERROR: ', err));
    }

    const showForm = () => {
        setIsForm(true);
    }

    const hideForm = () => {
        setIsForm(false);
        setLink('');
    }

    return (
        <div>
            {isForm 
                ? (
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter link" value={link} onChange={handleChange} onPaste={handlePaste}/>
                        <div>
                            <input type="submit" value="Add Link"/>
                            <button onClick={hideForm}>X</button>
                        </div>
                    </form>
                )
                :  <button onClick={showForm}>+ Add another link</button>
            }
        </div>
    )
}

const LinksCard = ({card_name, links, _id}) => {
    return (
        <div className="linksCard">
            <div className="linksCard__header">
                <h2 className="linksCard__title">{card_name}</h2>
                <textarea className="linksCard__textarea" rows="1">{card_name}</textarea>
                <button className="btn-svg linksCard__delete" aria-label="Delete card">
                    <DeleteSvg />
                </button>
            </div>
            <ul>
                {links.map(el => <Link key={el._id} {...el}/>)}
            </ul>
            {links.length < 5 &&
                <AddLink card_id={_id} />
            }
        </div>
    )
}

export default LinksCard;