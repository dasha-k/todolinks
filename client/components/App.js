import React, { useState } from 'react';

import Header from './Header';
import LinksContainer from './LinksContainer';

const App = () => {
    return (
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>  
            <Header/>
            <LinksContainer/>
        </div>
    )
}

export default App;