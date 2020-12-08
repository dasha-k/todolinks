import React, { useState } from 'react';

const AddLink = () => {
    const [link, setLink] = useState('');
    const [isForm, setIsForm] = useState(false);

    const handleChange = (event) => {
        setLink(event.target.value);
    }

    const handlePaste = (event) => {
        const link = event.clipboardData.getData('text/plain')
        setLink(link);
    };
    
    const handleSubmit = () => {
        // retrive title from link somehow 
        const title = "Fake title";
        // send put request with new link and title
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

const LinksCard = ({title, links}) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {links.map(el => <li><a href={el.link}>{el.name}</a></li>)}
            </ul>
            <AddLink />
        </div>
    )
}

export default LinksCard;