import { useState, useEffect } from 'react';

export const useMountComponent = ( isMounted, unmountDelay ) => {
    
    const [ hasAnimation, setHasAnimation ] = useState(false);

    useEffect(() => {
        let timeoutId;

        if ( isMounted && !hasAnimation) {
            setHasAnimation(true);
        } else if ( !isMounted && hasAnimation ) {
            timeoutId = setTimeout(() => setHasAnimation(false), unmountDelay);
        }

        return () => {
            clearTimeout(timeoutId);
        }
    }, [isMounted]);

    return hasAnimation;
}