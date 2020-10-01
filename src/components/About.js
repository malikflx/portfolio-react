import React from 'react';
import Header from '../layouts/Header';
import Malik from '../img/Malik_intro.jpg';
import Footer from '../layouts/Footer';

class About extends React.Component {
  render() {
    return(
      <>
        <Header />
        <div className="about-main">
        <div className="greeting">
          <h1 className="greeting_title greeting_title-intro">Hi, I'm <span className="bold">Malik Felix</span></h1>
          <p className="greeting_subtitle greeting_subtitle-intro">Web Developer</p>
          <img className="profileImg" src={ Malik } alt="malik-headshot"/>
        </div>

        <section id="services" className="my-services">
          <h2 className="greeting_title section_title-services">I Specialize In</h2>
          <div className="services">
            <div className="service">
              <h3 className="section_subtitle-service">Web Development</h3>
              <p>I started working on the web several years ago. Since then, I've been creating clean and beautiful content for the web. I'm skilled in HTML, CSS, JavaScript, and I also have experience with frameworks like ReactJS and NodeJS. I'm constantly learning web technologies and other design related topics.</p>
            </div>

            <div className="service">
              <h3 className="section_subtitle-service">Web Design</h3>
              <p>I also design websites! I'm well versed in CSS3 & SASS and work from a "Mobile First" approach using Responsive Web Design strategies. I've also worked with Bootstrap and other Responsive Design framworks like Materialize CSS.</p>
            </div>

            {/* <div className="service">
              <h3>Wordpress</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.  </p>
            </div> */}

          </div>
        </section>
        <section id="about">
          <div className="full-width">
          <div className="intro small">
            <h1 className="subtitle-main">A Little Bit About Me...</h1>
            <h3 className="greeting_subtitle-about">Developer & Designer based in the NYC Metropolitan area</h3>
            <p>Born in Brooklyn, NY and currently residing in Norwalk, CT, I'm a husband as well as a father of a beautiful young girl. I've been in IT for almost 8 years in the IT Service Management/Infrastructre space. See, here's the thing...I'm not your average tech guy. I didn't grow up wanting to do anything with technology outside of using it. I didn't want to build things, design websites, create logos, support enterprise technologhy infrastructure, or choose technology as a career profession. Now, I do all of those things. By day, I help a New York PR firm keep their technology infrastructure going without a hitch. By night, I design and develop websites for small businesses and organizations. While I do know some back-end technologies, I focus on the front-end to leave your webpages beautiful, clean, and enticing.</p>
          </div>
          <div className="full-width">
            <section className="skills">
              <h1 className="subtitle-main">Skills</h1>
              <h3 className="greeting_subtitle-about subtitle-right">Just a few things I could provide for you...</h3>
              <div className="blurb">
              <div className="third-width">
                <i className="fa fa-html5 fa-5x" aria-hidden="true"></i>
                <h3 className="title">HTML</h3>
                <p>Proficient in HTML with a focus on writing clean, organized, semantic markup so that content is well structured, easy to troubleshoot, and accessible.</p>
              </div>
              <div className="third-width">
                <i className="fa fa-css3 fa-5x" aria-hidden="true"></i>
                <h3 className="title">CSS</h3>
                <p>I write clean and organized CSS, enabling beautiful website designs and creations. I strive to stay up to date on best practices, and aim to write code that could be built upon.</p>
              </div>
              <div className="third-width">
                <i className="fa fa-code fa-5x" aria-hidden="true"></i>
                <h3 className="title">JavaScript</h3>
                <p>I write readable, easy to follow JavaScript code. I bring your webpages to life by using this to create a dynamic, interactive, fun site for both you and your visitors.</p>
              </div>
              </div>
            </section>
          </div>
          <div className="full-width">
            <section className="hobbies">
              <h1 className="subtitle-main">Hobbies</h1>
              <h3 className="greeting_subtitle-about">I'm not all work, I like to have a little fun too!</h3>
              <div className="blurb">
              <div className="third-width">
                <h3 className="title">Music</h3>
                <p>I've been playing the piano/keyboard for over 10 years. I use it as a way to defrazzle from the workday and reflect on my obstacles and accomplishments of the day.</p>
              </div>
              <div className="third-width">
                <h3 className="title">Foodie</h3>
                <p>We all love food, but I enjoy dining out with my close friends and family. From time to time, I'll try something new to gain new perspectives.</p>
              </div>
              <div className="third-width">
                <h3 className="title">Travel</h3>
                <p>I enjoy taking a weekend to see and experience new cities.</p>
              </div>
              </div>
            </section>
          </div>
          
          </div>
        </section>
        </div>
        <Footer/>
      </>
    )
  }
}

export default About;