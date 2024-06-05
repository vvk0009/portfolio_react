import React from 'react'
import './ecommerce'
import Navbar from '../components/navbar1'
import Footer from '../components/footer'
import Project3 from '../assets/project3.png'

const Weather = () => {
  return (
    <>
      <Navbar />
      <section className="ecommerce">
        <div className="title">
            <h1>Project:- Weather App Using Api</h1>
            <div></div>
        </div>


        <div className="frame">
            <img src={Project3} alt=""></img>
            <div>
                <p><span>Project Name :-</span> Weather App</p>
                <p><span>Technology Used :-</span> HTML , CSS , JS , Bootstrap</p>
                <div className="frame-button">
                    <a href="https://github.com/vvk0009/weather-app">Github Link</a>
                </div>
            </div>

        </div>

        <div className="description">
            <h1>Project Overview</h1>
            <p>The Weather Information Platform is a web-based application designed to provide real-time weather updates, forecasts, and climate information for locations worldwide. The platform will feature user-friendly navigation, location-based weather data, and interactive elements such as maps and charts. The website will be accessible on both desktop and mobile devices, ensuring a comprehensive and engaging user experience.</p>
        </div>

        <div className="objective">
            <h1>Objectives</h1>
            <li><span>Real-Time Weather Data:</span> Display current weather conditions for user-specified locations.</li>
            <li><span>Location-Based Services:</span> Enable users to search for weather information by city, ZIP code.</li>
            <li><span>Responsive Design:</span> Ensure the website is fully responsive and optimized for various devices.</li>
            <li><span>Security:</span> Implement security measures to protect user data and ensure the integrity of the application.</li>
        </div>

        <div className="scope">
            <h1><span>Scope Of Work</span></h1>
            <h3><span>Front-End Development:</span></h3>
            <li><span>Home Page:</span> Display a search bar, current weather conditions for the user's location, and featured weather updates.</li>
            <li><span>Search Functionality:</span> Implement search capabilities for cities, ZIP codes, and GPS-based locations.</li>
            <li><span>Responsive Design:</span> Ensure the platform is accessible and visually appealing on all devices.</li>
        </div>

        <div className="technology">
            <h1><span>Technology Stack:</span></h1>
            <li><span>Front-End:</span> Html , Css , js , Bootstrap</li>
            <li><span>API:</span> OpenWeatherMap API</li>
            <li><span>Deployment:</span> Github</li>
        </div>

        <div className="screenshot">
            
        </div>
    </section>
      <Footer />
    </>
  )
}

export default Weather
