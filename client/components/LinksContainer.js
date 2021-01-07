import React, { useState } from 'react';

import LinksView from './LinksView';
import TagsView from './TagsView';
import AddLink from './AddLink';

const LinksContainer = () => {
    const [currTag, setCurrTag] = useState('all');
    const changeTag = (tag) => setCurrTag(tag);

    return (
        <>
            <TagsView currTag={currTag} changeTag={changeTag} />
            <AddLink />
            <LinksView currTag={currTag} />
        </>
    )
}

export default LinksContainer;