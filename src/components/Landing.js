import React from "react";
import { Link } from "react-router-dom";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

class Landing extends React.Component {
  render() {
    return (
      <>
        <Header />

        <section className="hero">
          <div className="hero-content-space">
            <h1><span className="signature">Malik Felix</span> | Web Developer</h1>
            <h3>Digital Creativity & Design Made Simple</h3>
            <Link className="bttn" to="/about">Get To Know Me</Link>
            <Link className="bttn" to="/contact">Contact Me</Link>
            <div className="circle"></div>
          </div>
          
        </section>
        <Footer/>
      </>
    );
  }
};

export default Landing;