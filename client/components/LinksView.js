import React, { useState, useEffect } from 'react';

import LinkCard from './LinkCard';

const LinksView = ({currTag}) => {
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
        let url = '';
        switch(currTag) {
            case('all'):
            default: 
                url = '/api/';
                break;
            case('read'):
                console.log('case read');
                url = 'api/?tag=is_read';
                break;
            case('important'):
                console.log('case important');
                url = 'api/?tag=is_important';
                break;
        }
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

    return (
        <div className='cardsContainer'>
            {links
                ? <>
                    {links.map(link => {
                        console.log('render', link);
                        return (
                            <LinkCard {...link} key={link._id} optimistic={link._id === 0}/>
                        )
                    })}
                    {/* <AddCard handleOptimisticUpdate={handleOptimisticUpdate} handleCardsUpdate={handleCardsUpdate}/> */}
                </>
                : <div>loading...</div>
            }
            {error && <div>Something went wrong, we could not fetch your links</div>}
        </div>
    )
}

export default LinksView;