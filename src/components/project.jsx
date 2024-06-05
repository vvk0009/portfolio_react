import React from 'react'
import '../App.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import { Link } from 'react-router-dom'

const project = () => {

    const style_theme = {
        marginbottom: '20px',
    };
  return (
    <>
      <div className="heading" id="project">
        <h1>Projects</h1>
        <div></div>
    </div>

    <section className="project">
        <div className="test">
            <img className="project-img" src={project1} alt=""></img>
             <p>Project name :- Ecommerce Website</p>
             <p style={style_theme}>Technology Use:- Wordpress , Php my admin , HTML , CSS</p>
             <div className="project-button">
             <Link to="/pages/ecommerce">Read More...</Link>
                 <a href="https://github.com/vvk0009/frame">Github Link</a>
             </div>
         </div>

         <div className="test">
            <img className="project-img" src={project2} alt=""></img>
             <p>Project name :- Amrican Tourist Clone</p>
             <p style={style_theme}>Technology Use:- HTML , CSS , BOOTSTRAP</p>
             <div className="project-button">
                 <Link to="/pages/amricantourist">Read More...</Link>
                 <a href="https://github.com/vvk0009/american-tourust-clone">Github Link</a>
             </div>
         </div>
    </section>

    <section className="project">
        <div className="test">
            <img className="project-img" src={project3} alt=""></img>
             <p>Project name :- Weather App Using Api</p>
             <p style={style_theme}>Technology Use:- HTML , JS , API</p>
             <div className="project-button">
                 <Link to="/pages/weather">Read More...</Link>
                 <a href="https://github.com/vvk0009/weather-app">Github Link</a>
             </div>
         </div>

         <div className="test">
            <img className="project-img" src={project4} alt=""></img>
             <p>Project name :- Cryptomania</p>
             <p style={style_theme}>Technology Use:- React Js , Crypto Api , Tilwind CSS</p>
             <div className="project-button">
                 <Link to="/pages/crypto">Read More...</Link>
                 <a href="https://github.com/vvk0009/cryptomania">Github Link</a>
             </div>
         </div>
    </section>

    <section class="more">
        <div class="button">
            <a id="soon" href="#">Portfolio Using React</a>
        </div>

        <div class="button">
            <a href="https://github.com/vvk0009">More Project..</a>
        </div>
        <div class="button">
            <a href="./Assets/vivek_chaudhary (1).pdf">Download CV</a>
        </div>   
        
       
    </section>
    </>
  )
}

export default project
