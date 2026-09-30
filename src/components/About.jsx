import React from 'react'
import aboutImage from '../assets/hero_square.jpeg'
import Title from './Title'

const About = () => {
    return (

    <section className="section" id="about">
        <div className="section-title">
        <Title title="about" subtitle="us" />  
            {/* <h2>about<span>us</span></h2> */}
        </div>
        <div className="section-center about-center">
            <div className="about-img">
                <img src={aboutImage} alt="hill-photo" className="about-photo"/>
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia delectus aliquid distinctio corporis laudantium commodi?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error accusantium beatae ea cupiditate eligendi modi.</p>
                <a href="#" className="btn" role="button">read more</a>
            </article>
        </div>
    </section>

    )

}

export default About