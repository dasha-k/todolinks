import React from 'react';

import LinkCard from './LinkCard';
import AddLink from './AddLink';

const LinksView = ({links}) => {
    
    return (
        <div className='cardsContainer'>
            <AddLink />
            <>
                    {links.map(link => {
                        console.log('render', link);
                        return (
                            <LinkCard {...link} key={link._id} optimistic={link._id === 0}/>
                        )
                    })}
                </>
        </div>
    )
}

export default LinksView;