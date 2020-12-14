import React, { useState } from 'react';

import Header from './Header';
import CardsContainer from './CardsContainer';

const App = () => {

    const [currFilter, setCurrFilter] = useState('all');

    const changeFilter = (tag) => setCurrFilter(tag);
    
    return (
        <>  
            <Header currFilter={currFilter} setCurrFilter={changeFilter}/>
            <CardsContainer currFilter={currFilter}/>
        </>
    )
}

export default App;