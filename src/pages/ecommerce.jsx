import React from 'react'
import Project1 from '../assets/project1.png'
import './ecommerce.css'
import Navbar from '../components/navbar1'
import Footer from '../components/footer'

const ecommerce = () => {
  return (
    <>
    <Navbar />
      <section className="ecommerce">
        <div className="title">
            <h1>Project:- Ecommerce Website</h1>
            <div></div>
        </div>


        <div className="frame">
            <img src={Project1} alt=""></img>
            <div>
                <p><span>Project Name :-</span> Frame Website</p>
                <p><span>Technology Used :-</span> WordPress , HTML , CSS , JS , Mysql</p>
                <div className="frame-button">
                    <a href="https://github.com/vvk0009/frame">Github Link</a>
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
            <li> <span>User Registration and Authentication:</span> Implement a secure user registration and login system</li>
            <li> <span>Product Catalog:</span> Create a dynamic product catalog with categories, filters, and a search functionality.</li>
            <li> <span>Product Detail Pages:</span> Provide detailed product descriptions, images, reviews, and ratings. </li>
            <li> <span>Shopping Cart:</span> Develop a shopping cart system that allows users to add, remove, and update items.</li>
            <li> <span>Checkout Process:</span> Implement a smooth and secure checkout process with multiple payment options.</li>
            <li> <span>Order Management:</span> Enable users to track their orders and manage returns.</li>
            <li> <span>Admin Panel:</span> Create an admin dashboard for managing products, orders, users, and content.</li>
            <li> <span>Responsive Design:</span> Ensure the website is fully responsive and optimized for mobile devices.</li>
            <li> <span>Security:</span> Implement security best practices to protect user data and transactions.</li>
        </div>

        <div className="scope">
            <h1>Scope Of Work</h1>
            <h3>Front-End Development:</h3>
            <li><span>Home Page:</span> Display featured products, promotions, and categories.</li>
            <li><span>Product Listing:</span> Show products with sorting and filtering options.</li>
            <li><span>Product Detail Page:</span> Provide detailed information, reviews, and related products.</li>
            <li><span>Shopping Cart:</span> Interactive cart with the ability to update quantities or remove items.</li>
            <li><span>Checkout Page:</span> Secure form for shipping details, payment options, and order summary.</li>
            <li><span>User Account:</span> Pages for profile management, order history, and saved items.</li>
            <li><span>Responsive Design:</span> Ensure the website is accessible on various devices and screen sizes.</li>
            <h3><span>Back-End Development:</span></h3>
            <li><span>User Authentication:</span> Secure registration, login, and profile management.</li>
            <li><span>Product Management:</span> Admin interface for adding, updating, and deleting products.</li>
            <li><span>Order Management:</span> System for processing, tracking, and managing orders.</li>
            <li><span>Inventory Management:</span> Track stock levels and update product availability.</li>
            <li><span>Payment Gateway Integration:</span> Integrate with popular payment gateways Razorpay API.</li>
            <li><span>Database Management:</span> Design and manage databases for users, products, orders, etc.</li>
        </div>

        <div className="technology">
            <h1>Technology Stack:</h1>
            <li><span>Front-End:</span> Wordpress</li>
            <li><span>Back-End:</span> PHP</li>
            <li><span>Database:</span>MySQL</li>
            <li><span>Payment Integration:</span> Razorpay API</li>
            <li><span>Deployment:</span> Hostinger</li>
        </div>

        <div className="screenshot">
            
        </div>
    </section>
    <Footer />
    </>
  )
}

export default ecommerce
