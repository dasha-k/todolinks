import React, {useState} from 'react';

const AddLink = ( ) => {
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