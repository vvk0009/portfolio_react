import React from 'react'
import '../App.css'
import container_img from '../assets/3d-portrait-people.png'

const container = () => {

    const style_theme = {
        color: 'rgb(207,27,27)', 
    };

  return (
    <>
      <div className="container" id="home">
        <div className="text-area">
            <div>
                <h1>Hi, <br></br> I'm <span style={style_theme}>Vivek Chaudhary </span> <br></br> React.js Developer
                </h1>
                <button><a href="contact">Contact</a></button>
                <a href="#"></a>
            </div>

            <div className="social">
                <a href="https://www.linkedin.com/in/vivek-chaudhary-237136173/"><i id="social" className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/vvk0009"><i id="social" className="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/vvk_0009/?igsh=YXhrcWQ0cTNjd3Vk"><i id="social" className="fa-brands fa-instagram"></i></a>
                
                
                
            </div>
        </div>
        <div className="img-section">
            <img src={container_img} alt=""></img>
        </div>


    </div>
    </>
  )
}

export default container
