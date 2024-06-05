import React from 'react'
import '../App.css'
import img1 from '../assets/IMG-20230221-WA0003~2.jpg'

const about = () => {
  return (
    <>
      <div className="heading" id="about">
        <h1>About</h1>
        <div></div>
    </div>
    <section className="about">
        <div className="img_section" data-aos="zoom-in-right">
            <img src={img1} alt=""></img>
        </div>
        <div className="text_area" data-aos="zoom-in-left">
            <h2>Hello</h2>
            <p className="intro_1"> A software engineering graduate who is seeking to find the opportunity to work in <br></br> a
                fun and
                challenging working
                environment that will encourage him to improve and <br></br> learn new and necessary skills as well as be
                motivated by
                the company to do his <br></br> best for the sake of helping himself and the company advance in the software
                <br></br>engineering
                industry.
            </p>
            <p className="intro"> A software engineering graduate who is seeking to find the opportunity to work in a fun
                and
                challenging working
                environment that will encourage him to improve and learn new and necessary skills as well as be
                motivated by
                the company to do his best for the sake of helping himself and the company advance in the software
                engineering
                industry.
            </p>

            <p></p>
        </div>
    </section>
    </>
  )
}

export default about
