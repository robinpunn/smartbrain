import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
      <div className='ma4 mt0 flex justify-center'>
        <Tilt className="Tilt pb4 br2 shadow-2" tiltReverse='true' style={{ height: '150px', width: '150px'}}>
            <div className="Tilt-inner pa1 c">
                <h1><img src={brain} alt='logo' /></h1>
            </div>
        </Tilt>
      </div>
    )
}

export default Logo;