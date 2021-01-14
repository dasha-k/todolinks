import React from 'react';

import TagsView from './TagsView';
import LinkCard from './LinkCard';
import AddLink from './AddLink';

import useLinks from '../utils/useLinks';

export const TagsContext = React.createContext();

const LinksContainer = () => {
    
    //const changeTag = (tagId) => setCurrTag(tagId);
    const [links, error, addLink] = useLinks();
    
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
    const currTag = 1; // delete later
    console.log('links', links, 'error -->', error);
    return (
        <TagsContext.Provider value={{currTag}}>
            <TagsView 
                //currTag={currTag} 
                //changeTag={changeTag} 
            />
            {links
                ? <div className='cardsContainer'>
                    <AddLink addLink={addLink}/>
                    <>
                        {links.map(link => <LinkCard {...link} key={link._id} optimistic={link._id === 0}/>)}
                    </>
                </div>
                : <div>loading...</div>
            }
            {error && <div>Something went wrong, we could not fetch your links</div>}
        </TagsContext.Provider>
    )
}

export default LinksContainer;