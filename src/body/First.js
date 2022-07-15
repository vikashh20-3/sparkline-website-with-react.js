import React from 'react'
import "../body/First.css"
const First = () => {
    return (
        <div className='main_1'>

            <div className='form'>
                <h2>We’d love to hear about your project!</h2>
                <input type='text' placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type='text' placeholder='About your project' aria-rowindex="10" />
                <button className='btn_1'> SEND US</button>
            </div>
            <div className='l_12'>
                <h1>Our case study </h1>
                <p>The exciting part of what we do is delivering creative strategies, tactics and approaches
                    that help our clients grow their business. Take a look at some examples below:</p>
                <div className='toggle'>
                    <a href="#show" class="show"><span>1️⃣</span>Planning & Implementation</a>
                    <a href="#hide" class="hide"> </a>
                    <div id="cont">Content</div>
                </div>
                <div className='toggle'>
                    <a href="#show" class="show"><span>2️⃣</span>Give 100% effort to the Development</a>
                    <a href="#hide" class="hide"> </a>
                    <div id="cont">Content</div>
                </div>
                <div className='toggle'>
                    <a href="#show" class="show"><span>3️⃣</span>Execution and deliver the projects</a>
                    <a href="#hide" class="hide"> </a>
                    <div id="cont">
                        <img src=''></img>
                        <p>Execution and deliver the projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default First;
        //     <div className='btn'>
        //         <a class="fancy" href="#">
        //             <span class="top-key"></span>
        //             <span class="text">VIEW MORE</span>
        //             <span class="bottom-key-1"></span>
        //             <span class="bottom-key-2"></span>
        //         </a>
        //    </div>