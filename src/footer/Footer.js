import React from 'react';
import "../footer/Footer.css"

const Footer = () => {
    return (
        <div className='f12'>

            <div className='l_33'>

                <p>Our team consists of word nerds, PPC masters, graphic design sages and web development wizards. (We’re also basically a Dungeons & Dragons troupe.) We look for ways to give clients out-of-the-box solutions that meet their current needs while anticipating what comes down the pike. Collaboration is key — both within the walls of this office and in our conversations with clients.
                    <span>We make good on “teamwork makes the dream work.”</span></p>
            </div>

            <div className='dtl'>
                           
                    <img src='./logo.png' alt='logo'></img>
                    <div  clasName='l_3323'>
                        <span>
                            <p>Phone</p></span>
                            <i class="bi bi-phone"/>

                    </div>
            </div>
        </div>

    )
};
export default Footer;