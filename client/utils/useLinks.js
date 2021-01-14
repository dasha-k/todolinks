import React, { useMemo, useState, useEffect } from 'react';

import fetchLinks from './fetchLinks';
import { getLinks, patchLink, removeLink, createLink, filterLinks } from './requests';

const useLinks = () => {
    // logic to update/delete/create links
    //const [currTag, setCurrTag] = useState(1);
    const [links, setLinks] = useState(null);
    const [error, setError] = useState(null);

    const addLink = async (link) => {
        console.log('call change links', link);
        const linkObject = { link_src: link, tag_id: null, link_name: '', _id: 0}
        setLinks(links => [linkObject, ...links]);
        const request = createLink(linkObject);
        const [result, error] = await fetchLinks(request);
        console.log('new link-->', result);
        if(result) {
            setLinks(links => (links.map(link => link._id === 0 ? result : link)));
        }
        if(error) {
            setLinks(links => (links.filter(link => link._id !== 0)));
        }
    }

    const deleteLink = async (linkId) => {
        console.log('call delete link', linkId);
        const rollbackState = [...links];
        setLinks(links => (links.filter(link => link._id !== linkId)));
        const request = removeLink(linkId);
        const [result, error] = await fetchLinks(request);
        if(result) {
            console.log('deleted successfully');
        }
        if(error) {
            setLinks(rollbackState);
        }
    }

    const updateLink = async (linkId, payload) => {
        console.log('call update link', linkId);
        const rollbackState = [...links];
        setLinks(links => (links.map(link => link._id === linkId ? payload : link)));
        const request = patchLink(linkId, payload);
        const [result, error] = await fetchLinks(request);
        if(result) {
            console.log('updated successfully');
        }
        if(error) {
            setLinks(rollbackState);
        }
    }

    console.log('inside useLinks', links);
    const request = useMemo(() => getLinks(), []);

    useEffect(async () => {
        console.log('inside use effect', request);
        const [results, error] = await fetchLinks(request);
        console.log('links-->', results);
        setLinks(results);
        setError(error);
    }, [request]);

    // useEffect(() => {
    //     console.log('container mount', currTag);
    //     let url = currTag === 1 ? '/api/link' : `/api/link/?tag=${currTag}`;
        
    //     let statusCode = 200;
    //     fetch(url)
    //         .then((res) => { 
    //             statusCode = res.status;
    //             return res.json()
    //         })
    //         .then((data) => {
    //             console.log('data', data);
    //             if(statusCode === 200) {
    //                 return setLinks(data);
    //             } else {
    //                 return setError(true);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log('Cards.useEffect: get characters: ERROR: ', err);
    //             return setError(true);
    //         });
    // }, [currTag]);

    
    //return useApiResult(request);
    return [links, error, addLink, deleteLink, updateLink];
}

export default useLinks;