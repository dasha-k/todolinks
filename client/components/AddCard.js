import React, {useState} from 'react';

const AddCard = () => {
    const [cardTitle, setCardTitle] = useState('');
    const [isForm, setIsForm] = useState(false);

    const handleChange = (event) => {
        setCardTitle(event.target.value);
    }
    
    const handleSubmit = () => {
        // send post request with new card
    }

    const showForm = () => {
        setIsForm(true);
    }

    const hideForm = () => {
        setIsForm(false);
        setCardTitle('');
    }

    return (
        <div>
            {isForm 
                ? (
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter card title" value={cardTitle} onChange={handleChange} required min="3" />
                        <div>
                            <input type="submit" value="Add Card"/>
                            <button onClick={hideForm}>X</button>
                        </div>
                    </form>
                )
                :  <button onClick={showForm}>+ Add another card</button>
            }
        </div>
    )
}

export default AddCard;