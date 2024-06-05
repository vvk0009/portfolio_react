import React from 'react'
import './ecommerce'
import Navbar from '../components/navbar1'
import Footer from '../components/footer'
import Project2 from '../assets/project2.png'

const amricantourist = () => {
  return (
    <>
      <Navbar />
      <section className="ecommerce">
        <div className="title">
            <h1>Project:- Amrican Tourist Clone</h1>
            <div></div>
        </div>


        <div className="frame">
            <img src={Project2} alt=""></img>
            <div>
                <p><span>Project Name :-</span> Amrican Tourist Clone</p>
                <p><span>Technology Used :-</span> HTML , CSS , JS , Bootstrap</p>
                <div className="frame-button">
                    <a href="https://github.com/vvk0009/american-tourust-clone">Github Link</a>
                </div>
            </div>

        </div>

        <div className="description">
            <h1>Project Overview</h1>
            <p>This project aims to develop a comprehensive e-commerce website that allows users to browse, search, and
                purchase a variety of products online. The platform will feature user-friendly navigation, a secure
                shopping cart, multiple payment options, and an efficient order management system. The website will
                cater to both desktop and mobile users, ensuring a seamless shopping experience across all devices.</p>
        </div>

        <div className="objective">
            <h1>Objectives</h1>
            <li> <span>Product Catalog:</span>  Create a dynamic product catalog with categories, filters, and a search functionality.</li>
            <li> <span>Product Detail Pages:</span> Provide detailed product descriptions, images, reviews, and ratings. </li>
            <li> <span>Responsive Design:</span> Ensure the website is fully responsive and optimized for mobile devices.</li>
        </div>

        <div className="scope">
            <h1><span>Scope Of Work</span></h1>
            <h3><span>Front-End Development:</span></h3>
            <li><span>Home Page:</span> Display featured products, promotions, and categories.</li>
            <li><span>Product Detail Page:</span> Provide detailed information, reviews, and related products.</li>
            <li><span>Responsive Design:</span> Ensure the website is accessible on various devices and screen sizes.</li>
        </div>

        <div className="technology">
            <h1><span>Technology Stack:</span></h1>
            <li><span>Front-End:</span> Html , Css , Bootstrap</li>
            <li><span>Deployment:</span> Github</li>
        </div>

        <div className="screenshot">
            
        </div>
    </section>
    <Footer />  
    </>
  )
}

export default amricantourist
