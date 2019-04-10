import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '1em'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 underline black dim link pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;