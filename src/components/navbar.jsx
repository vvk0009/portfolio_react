import React from 'react'
import logo from '../assets/logo-removebg-preview.png'
import '../App.css'
import sun from '../assets/sun.png'

const navbar = () => {

    const style_theme = {
        display:'flex',
        alignitems: 'center',
        justifycontent: 'center' ,
        gap:'10px',
    };
    return (
        <>
        <nav>

                <div>
                    <img src={logo} alt="" id="logo"></img>
                </div>
                <ul className="mob-nav-bar">
                    <li>
                        <a href="#home" className="nav-link active">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="nav-link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="nav-link">Project</a>
                    </li>

                    <li>
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>

                <div style={style_theme}>
                    <div className="theme_btn">
                        {/* <!-- <p id="change_theme">Mode</p> --> */}
                        <img src={sun} alt="" id="icon"></img>
                    </div>
                    <div className="animation start-home"></div>

                    {/* <!-- <input type="checkbox" id="vvk"> --> */}
                        <label for="vvk" className="hamburger">
                            <div></div>
                            <div></div>
                            <div></div>
                        </label>
                </div>
                </nav>
        </>
    )
}

export default navbar
