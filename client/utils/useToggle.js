import React, {useState, useCallback} from 'react';

const useToggle = (initialVal = false) => {
    const [value, setValue] = useState(initialVal);

    const toggle = useCallback(() => {
        setValue(v => !v);
    },[]);

    return [value, toggle];
}

export default useToggle;