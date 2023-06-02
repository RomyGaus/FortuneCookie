import React from 'react';

const FortuneCookie = () => {
    return(
        <div className='fortuneCookie'>
            <img style={{width: "100%", height: "100%", objectFit: 'contain'}} alt='fortune cookie' src={require('.//Images/cookie.png')} />
        </div>
    )
}

export default FortuneCookie;