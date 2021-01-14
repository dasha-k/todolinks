import React from 'react';

import TagsView from './TagsView';
import LinkCard from './LinkCard';
import AddLink from './AddLink';

import useLinks from '../utils/useLinks';

export const TagsContext = React.createContext();

const LinksContainer = () => {
    
    //const changeTag = (tagId) => setCurrTag(tagId);
    const [links, error, addLink, deleteLink, updateLink] = useLinks();
    
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
                        {links.map(link => <LinkCard linkObj={link} key={link._id} optimistic={link._id === 0} deleteLink={deleteLink} updateLink={updateLink}/>)}
                    </>
                </div>
                : <div>loading...</div>
            }
            {error && <div>Something went wrong, we could not fetch your links</div>}
        </TagsContext.Provider>
    )
}

export default LinksContainer;