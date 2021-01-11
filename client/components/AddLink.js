import React, {useState, useContext} from 'react';

import { TagsContext } from './LinksContainer';

const AddLink = ( ) => {
    const [link, setLink] = useState('');
    const [isForm, setIsForm] = useState(false);

    const {links, setLinks} = useContext(TagsContext);
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

        // make optimistic update for links state with new link
        const newLink = { link_src: link, tag_id: null, link_name: '', _id: 0}
        //const newLinks = [newLink, ...links];
        setLinks(links => [newLink, ...links]);
        setLink('');
        setIsForm(false);
        // retrive title from link somehow 
        const linkObject = {
            link_src: link,
            tag_id: null
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
            console.log('success', data);
            const newLinks = [...links];
            newLinks[0] = data;
            setLinks(newLinks);
            
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
        <div className="linkCard">
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

export default AddLink;