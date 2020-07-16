import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

class Projects extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <section className="temporary">
          <div className="temporary-content-space">
            <h1>Under Construction</h1>
            <div className="line-break">
              <div className="rotate-square"></div>
              <div className="rotate-square"></div>
              <div className="rotate-square"></div>
            </div>
            <h3>Projects will be posted soon!</h3>
          </div>
        </section>

        <Footer/>
      </>
    )
  }
};

export default Projects;