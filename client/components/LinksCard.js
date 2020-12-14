import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Link from './Link.js';

import DeleteSvg from './svg/close.svg';

const AddLink = ({card_id}) => {
    const [link, setLink] = useState('');
    const [isForm, setIsForm] = useState(false);

    //const history = useHistory();

    const handleChange = (event) => {
        console.log('call handle change', event.target.value);
        setLink(event.target.value);
    }

    // const handlePaste = (event) => {
    //     const link = event.clipboardData.getData('text/plain')
    //    // setLink(link);
    //     console.log('handle paste', link);
    // };
    
    const handleSubmit = (event) => {
        console.log('hanle submit', link);
        event.preventDefault();
        // retrive title from link somehow 
        const linkObject = {
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
           
            window.history.go('/');
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
                        <input type="text" placeholder="Enter link" value={link} 
                            onChange={handleChange} 
                            //onPaste={handlePaste}
                        />
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

    const [value, setValue] = useState(card_name);

    const handleKeyDown = (event) => { 
        // console.log(event.key);
        if(event.key === 'Enter') {
            event.preventDefault();

            const cardObject = {
                card_name: value,
            }

            fetch(`api/card?id=${_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "Application/JSON"
                },
                body: JSON.stringify(cardObject)
            })
            .then((data) => {
                console.log('card update',data);
                window.history.go('/');
            })
            .catch(err => console.log('Card.update: card update: ERROR: ', err));
        }
    }

    const handleChange = (event) => {
        // console.log(event.charCode, event);  
        setValue(event.target.value);
    }

    const cardDelete = () => {
        console.log('click card delete');
        fetch(`api/card?id=${_id}`, {
            method: 'DELETE'
        })
        .then((data) => {
            console.log('card delete', data);
            window.history.go('/');
        })
        .catch(err => console.log('Card.delete: card delete: ERROR: ', err));
    }

    return (
        <div className="linksCard">
            <div className="linksCard__header">
                <h2 className="linksCard__title">{card_name}</h2>
                <textarea className="linksCard__textarea" rows="1" value={value} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
                <button className="btn-svg linksCard__delete" aria-label="Delete card" onClick={cardDelete}>
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