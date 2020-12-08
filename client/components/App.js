import React from 'react';

import Filters from './Filters';
import LinksCard from './LinksCard';
import AddCard from './AddCard';

const fakeLinks = [
    {
        title: 'Browser rendering',
        links: [
            {
                'name': "How the browser renders HTML & CSS",
                'link': 'https://medium.com/@mustafa.abdelmogoud/how-the-browser-renders-html-css-27920d8ccaa6',
                'id': 'id',
                'isRead': false,
                'isImportant': false
            },
            {
                'name': "name",
                'link': 'link',
                'id': 'id',
                'isRead': false,
                'isImportant': false
            },
            {
                'name': "name",
                'link': 'link',
                'id': 'id',
                'isRead': false,
                'isImportant': false
            }
        ]
    },
    {   
        title: 'Promises',
        links: [
            {
                'name': "Understanding promises in JavaScript",
                'link': 'link',
                'id': 'id',
                'isRead': false,
                'isImportant': false
            }
        ]
    }
]

const App = () => {
    return (
        <>  
            <Filters />
            <div>
                {fakeLinks.map(object => {
                    return (
                        <LinksCard {...object} />
                    )
                })}
                <AddCard />
            </div>
           
        </>
    )
}

export default App;