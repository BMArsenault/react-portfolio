import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer = () => {
    return (
        <footer className="footer fixed-bottom text-center d-flex justify-content-center flex-column p-2">
            <div>
                <h3>Portfolio built by Brian Arsenault &copy; 2022</h3>
            </div>
            <div className='justify-content-center'>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(231,231,231,0)" iconSize="5" roundness="25%" url="https://www.instagram.com" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(231,231,231,0)" iconSize="5" roundness="25%" url="https://github.com/BMArsenault" size="30" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(231,231,231,0)" iconSize="3" roundness="25%" url="https://www.linkedin.com/in/brian-arsenault-311061717/" size="30" />
            </div>
        </footer>
    )
}

export default Footer;