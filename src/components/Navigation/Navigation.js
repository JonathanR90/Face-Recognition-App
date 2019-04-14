import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '1em'}}>
                    <p onClick={() => onRouteChange('signout')} className='f3 underline black dim link pointer'>Sign Out</p>
                </nav>
            )
        } else {
            return (
                    <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '1em'}}>
                        <p onClick={() => onRouteChange('signin')} className='f3 underline black dim link pointer pa2'>Sign In</p>
                        <p onClick={() => onRouteChange('register')} className='f3 underline black dim link pointer pa2'>Register</p>
                    </nav>
            )           
        }
    }

export default Navigation;