import React, {useState, useCallback} from 'react';

export const useToggle = (initialVal = false) => {
    const [value, setValue] = useState(initialVal);

    const toggle = useCallback(() => {
        setValue(v => !v);
    },[]);

    return [value, toggle];
}