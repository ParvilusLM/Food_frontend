import React, { useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom';

function DetectionChangementPage({ setCurrentPath }) {
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location, setCurrentPath]);

    return (
        <Fragment></Fragment>
    )
}

export default DetectionChangementPage