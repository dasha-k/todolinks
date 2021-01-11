import React, { useState, useEffect } from 'react';

import LinksView from './LinksView';
import TagsView from './TagsView';

export const TagsContext = React.createContext();

const LinksContainer = () => {
    const [currTag, setCurrTag] = useState(1);
    const changeTag = (tagId) => setCurrTag(tagId);

    const [links, setLinks] = useState(null);
    const [error, setError] = useState(false);

    let statusCode = 200;

    const handleOptimisticUpdate = (cardTitle) => {
        // run before database updated
        // put new card in state with 0 id
        const newCardObj = {
            _id: 0,
            card_name: cardTitle,
            links: []
        }
        const updatedCards = [...cards, newCardObj]
        //updatedCards["0"] = newCardObj;
        setCards(updatedCards);
    }

    const handleCardsUpdate = (card = null) => {
        // run when database in successfully updated
        console.log('handle update', card);
        const newCard = {...card, links: []}
        const updatedCards = cards.filter(obj => obj._id !== 0);
        if(card) updatedCards.push(newCard);
            
        setCards(updatedCards);
    }

    useEffect(() => {
        console.log('container mount', currTag);
        let url = currTag === 1 ? '/api/' : `/api/?tag=${currTag}`;
    
        fetch(url)
            .then((res) => { 
                statusCode = res.status;
                return res.json()
            })
            .then((data) => {
                console.log('data', data);
                // return this.setState({
                // characters,
                // fetchedChars: true
                // });
                if(statusCode === 200) {
                    return setLinks(data);
                } else {
                    return setError(true);
                }
            })
            .catch((err) => {
                console.log('Cards.useEffect: get characters: ERROR: ', err);
                return setError(true);
            });
    }, [currTag]);

    console.log('current tag is', currTag);

    return (
        <TagsContext.Provider value={{currTag, changeTag, links, setLinks}}>
            <TagsView currTag={currTag} changeTag={changeTag} />
            {links ? <LinksView links={links} /> : <div>loading...</div>}
            {error && <div>Something went wrong, we could not fetch your links</div>}
        </TagsContext.Provider>
    )
}

export default LinksContainer;