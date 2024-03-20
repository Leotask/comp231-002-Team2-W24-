import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faPinterest, faVk, faStackOverflow, faYoutube, faSlackHash, faGithub, faDribbble, faRedditAlien, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Navbar from './navbar';

const Topbar = () => {
    return (
       <div className='content'>
           
     

            <FontAwesomeIcon icon={faFacebookF} size="2x" style={{ color: '#3b5998' }} />
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#55acee' }} />
            <FontAwesomeIcon icon={faGoogle} size="2x" style={{ color: '#dd4b39' }} />
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#ac2bac' }} />
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: '#0082ca' }} />
            <FontAwesomeIcon icon={faPinterest} size="2x" style={{ color: '#c61118' }} />
            <FontAwesomeIcon icon={faVk} size="2x" style={{ color: '#4c75a3' }} />
            <FontAwesomeIcon icon={faStackOverflow} size="2x" style={{ color: '#ffac44' }} />
            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#ed302f' }} />
            <FontAwesomeIcon icon={faSlackHash} size="2x" style={{ color: '#481449' }} />
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333333' }} />
            <FontAwesomeIcon icon={faDribbble} size="2x" style={{ color: '#ec4a89' }} />
            <FontAwesomeIcon icon={faRedditAlien} size="2x" style={{ color: '#ff4500' }} />
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25d366' }} />
        
           <div>
        <Navbar />
        </div>
        </div>
    );
}

export default Topbar;
