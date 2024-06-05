import React from 'react'
import './ecommerce'
import Navbar from '../components/navbar1'
import Footer from '../components/footer'
import Project4 from '../assets/project4.png'

const Crypto = () => {
  return (
    <>
    <Navbar />
      <section className="ecommerce">
        <div className="title">
            <h1>Project:- Cryptomania</h1>
            <div></div>
        </div>


        <div className="frame">
            <img src={Project4} alt=""></img>
            <div>
                <p><span>Project Name :-</span> Cryptomania</p>
                <p><span>Technology Used :-</span> React Js , Coingeco Api</p>
                <div className="frame-button">
                    <a href="https://github.com/vvk0009/cryptomania">Github Link</a>
                </div>
            </div>

        </div>

        <div className="description">
            <h1>Project Overview</h1>
            <p>Cryptomania is a modern web application built using React.js, designed to provide real-time
                cryptocurrency data, market trends, and management tools for cryptocurrency enthusiasts and investors.
                The platform will offer features like price tracking, historical data analysis, customizable dashboards,
                and alerts for market changes, all with a focus on user-friendly and responsive design.</p>
        </div>

        <div className="objective">
            <h1>Objectives</h1>
            <li><span>Real-Time Market Data:</span> Provide up-to-date prices and market data for various
                cryptocurrencies.</li>
            <li><span>User Accounts:</span> Enable secure user registration and login for personalized experiences.</li>
            <li><span>News and Updates:</span> Integrate a news feed with the latest updates and articles on
                cryptocurrencies.</li>
            <li><span>Responsive Design:</span> Ensure the platform is optimized for all devices, including desktops,
                tablets, and smartphones.</li>
            <li><span>Security:</span> Implement robust security measures to protect user data and ensure safe
                transactions.</li>
        </div>

        <div className="scope">
            <h1>Scope Of Work</h1>
            <h3>Front-End Development:</h3>
            <li><span>Home Page:</span> Display an overview of the top cryptocurrencies, market summaries, and trending
                news.</li>
            <li><span>Cryptocurrency Detail Pages:</span> Provide detailed information on individual cryptocurrencies,
                including real-time prices, historical charts, market cap, and volume.</li>
            <li><span>User Dashboard:</span> Develop a customizable dashboard where users can add their favorite
                cryptocurrencies, set up alerts, and view their portfolio.</li>
            <li><span>Search and Filtering:</span> Implement search functionality and filters to help users find
                specific cryptocurrencies easily.</li>
            <li><span>News Feed:</span> Integrate a section for the latest news and updates related to cryptocurrencies.
            </li>
            <li><span>Responsive Design:</span> Ensure the application is visually appealing and functional on all
                devices.</li>
            <h3><span>Back-End Development:</span></h3>
            <li><span>API Integration:</span> Fetch real-time and historical data from cryptocurrency APIs CoinGecko.
            </li>
            <li><span>User Authentication:</span> Implement secure user registration, login, and profile management
                using a back-end service or API.</li>
        </div>

        <div className="technology">
            <h1>Technology Stack:</h1>
            <li><span>Front-End:</span> React Js</li>
            <li><span>Back-End:</span>Coingeco API , login Api </li>
            <li><span>Deployment:</span> Github , Vercel</li>
        </div>

        <div className="screenshot">

        </div>
    </section>
    <Footer />
    </>
  )
}

export default Crypto
