import React, { useState } from 'react';

const AddLink = ({ addLink } ) => {
    const [link, setLink] = useState('');
    const [isForm, setIsForm] = useState(false);

    const handleChange = (event) => {
        console.log('call handle change', event.target.value);
        setLink(event.target.value);
    }
    
    const handleSubmit = (event) => {
        console.log('hanle submit', link);
        event.preventDefault();
        
        addLink(link);

        setLink('');
        setIsForm(false);
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