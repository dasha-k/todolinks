import React, { useState } from 'react';

import LinksView from './LinksView';
import TagsView from './TagsView';

export const TagsContext = React.createContext();

const LinksContainer = () => {
    const [currTag, setCurrTag] = useState(1);
    const changeTag = (tagId) => setCurrTag(tagId);

    return (
        <TagsContext.Provider value={{currTag, changeTag}}>
            <TagsView currTag={currTag} changeTag={changeTag} />
            <LinksView currTag={currTag} />
        </TagsContext.Provider>
    )
}

export default LinksContainer;