import React from 'react'
import "../Head/Tophead.css";
// import {telephone} from 'react-bootstrap-icons'; 
const Tophead = () => {
    return (
        <div className='main '>
            
        
            <div className='slt'>
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
            </div>
            <div className='contact'>
                <div><i className="bi bi-telephone"/>+91-9991462409</div>
                <div><i className="bi bi-telephone"/>+91-9518076299</div>
            </div>
            <div className='icn'>
                <i className="bi bi-skype"></i>
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
            </div>
            <div className='navright'>

                <div className='txt_1'>
                    <p>Check your rankings 24 x 7 in your SEO client</p>
                </div>
                <div className='btn'>
                    <button> <span><i className="bi bi-speedometer2"></i></span>Quick Contact</button>
                </div>
            </div>
        </div>
    )
};
export default Tophead;

