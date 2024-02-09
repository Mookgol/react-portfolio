import React from 'react';
import './Home.css';
import hero1 from '../components/Assets/hero1.png';


function Home() {
    return (
        <section id="profile">
            <div className="profile__container">
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Mookgo Lebaka</h1>
                    <p> A passionate Front-end Developer and Digital Illustrator<br/>based in Cape Town, South Africa.
                    </p>
                </div>
                <div className="image__container">
                    <img src={hero1} alt="Hero" className="hero-image"/>
                </div>
            </div>
        </section>
    );
}

export default Home;
