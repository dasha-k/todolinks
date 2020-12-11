import React, { useState } from 'react';

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
        <div>
            <h2>{card_name}</h2>
            <ul>
                {links.map(el => <li key={el._id}><a target="_blank" href={el.link}>{el.link_name}</a></li>)}
            </ul>
            <AddLink card_id={_id} />
        </div>
    )
}

export default LinksCard;