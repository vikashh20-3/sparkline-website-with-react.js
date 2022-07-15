import React from 'react'
import "../body/Portfolio.css"
const Portfolio = () => {
    return (<>
        <div className='p_1'>
            <h2>
                Portfolio
            </h2>
            <div className='img12'>
                <div className='innercard'>

                    <img src='https://colorlib.com/cdn-cgi/image/width=1600,height=999,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/illdy-mac-preview.jpg' alt='logo' id='1' className='ig'></img>
                </div>

            </div>
            <div className='img12'>
                <div className='innercard'>

                    <img src='https://colorlib.com/img/activello.webp' alt='logo' id='1' className='ig'></img>
                </div>

            </div>
            <div className='img12'>
                <div className='innercard'>

                    <img src='https://colorlib.com/img/unite.webp' alt='logo' id='1' className='ig'></img>
                </div>

            </div>
            {/* <div className='img12'>
                <img  src='https://colorlib.com/img/pinbin.webp' alt='logo' id='1' className='ig'></img>

            </div> */}
            {/* <div className='img12'>
                <img  src='https://colorlib.com/img/travelify.webp' alt='logo' id='1' className='ig'></img>

            </div> */}
         </div>
            <div className='btn34'>
                <a class="fancy" href="#">
                    <span class="text">MORE WORK</span>
                    <span class="top-key"></span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </a>
            </div></>
    )
};
export default Portfolio;
