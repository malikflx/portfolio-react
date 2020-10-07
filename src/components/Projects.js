import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import MemoryGame from '../img/memory-game.png';
import SimpleChat from '../img/simple-chat.png';

class Projects extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <section className="projects">
          <a href="http://memorygame.malikfelix.com" target="_blank" rel="noopener noreferrer">
            <img className="card-image" src={ MemoryGame } alt="memorygame"/>
            <div className="project-description">
              <h4><b>Memory Game</b></h4>
              <p>VanillaJS/DOM Manipulation</p>
            </div>
            </a>
          <a href="http://simplechat.malikfelix.com" target="_blank" rel="noopener noreferrer">
            <img className="card-image" src={ SimpleChat } alt="simplechat"/>
            <div className="project-description">
              <h4><b>Simple Chat</b></h4>
              <p>VanillaJS/Socket.io</p>
            </div>
          </a>
        </section>
        <section className="temporary">
          <div className="temporary-content-space">
            <div className="line-break">
              <div className="rotate-square"></div>
              <div className="rotate-square"></div>
              <div className="rotate-square"></div>
            </div>
            <h3>More projects will be posted soon!</h3>
          </div>
        </section>
        <Footer/>
      </>
    )
  }
};

export default Projects;