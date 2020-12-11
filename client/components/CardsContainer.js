import React, { useState, useEffect } from 'react';

import LinksCard from './LinksCard';
import AddCard from './AddCard';

const fakeLinks = {
    'Browser rendering': {
        card_name: 'Browser rendering',
        _id: 1,
        links: [
            {
                'link_name': "How the browser renders HTML & CSS",
                'link': 'https://medium.com/@mustafa.abdelmogoud/how-the-browser-renders-html-css-27920d8ccaa6',
                '_id': 1,
                'isRead': false,
                'isImportant': false
            },
            {
                'link_name': "name",
                'link': 'link',
                '_id': 2,
                'isRead': false,
                'isImportant': false
            },
            {
                'link_name': "name",
                'link': 'link',
                '_id': 3,
                'isRead': false,
                'isImportant': false
            }
        ]
    },
    'Promises': {   
        card_name: 'Promises',
        _id: 2,
        links: [
            {
                'link_name': "Understanding promises in JavaScript",
                'link': 'link',
                '_id': 1,
                'isRead': false,
                'isImportant': false
            }
        ]
    }
}

const CardsContainer = () => {
    const [cards, setCards] = useState(null);
    useEffect(() => {
        console.log('container mount');
        fetch('/api/')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                // return this.setState({
                // characters,
                // fetchedChars: true
                // });
                return setCards(data);
            })
            .catch(err => console.log('Cards.useEffect: get characters: ERROR: ', err));
    }, []);

    return (
        <div className='cardsContainer'>
            {cards
                ? <>
                    {Object.keys(cards).map(cardName => {
                        const card = cards[cardName];
                        //console.log('render', card);
                        return (
                            <LinksCard {...card} key={card._id} />
                        )
                    })}
                </>
                : <div>loading...</div>
            }
            <AddCard />
        </div>
    )
}

export default CardsContainer;