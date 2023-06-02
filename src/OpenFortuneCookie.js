import React from 'react';

const OpenFortuneCookie = ({message}) => {
    return (
        <div className='openFortuneCookie'>
            <div className='cookiePieces'>
                <img className='cookiePieceLeft' alt='fortune cookie left' src={require('.//Images/cookie-l.png')} />
                <img className='cookiePieceRight' alt='fortune cookie right' src={require('.//Images/cookie-r.png')} />
            </div>
            <p className='message'>{message}</p>
        </div>
    )
}

export default OpenFortuneCookie;