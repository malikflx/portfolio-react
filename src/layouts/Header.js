import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleClick() {
    document.body.classList.toggle('nav-open');
  }

  handleLink() {
    document.body.classList.remove('nav-open'); 
  }
  
  handleUpdate() {
    document.body.scrollTo(0,0);
  }
  render() {
    return (
      <header>
      <div className="logo">
        <div>
        <h2><Link className="headerLink" to="/"><span className="signature">Malik Felix</span> | Web Developer</Link></h2>
        </div>
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li className="main-nav-item"><Link className="landingLink" to="/">Home</Link></li>
          <li className="main-nav-item"><Link className="landingLink" to="/about">About</Link></li>
          <li className="main-nav-item"><Link className="landingLink" to="/projects">Projects</Link></li>
          <li className="main-nav-item"><Link className="landingLink" to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button  onClick={this.handleClick} className="nav-toggle" aria-label="activate navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link onClick={() => {this.handleLink();  this.handleUpdate(); }}className="landingLink" to="/">Home</Link></li>
          <hr />
          <li className="nav-item"><Link onClick={() => {this.handleLink();  this.handleUpdate(); }}className="landingLink" to="/about">About</Link></li>
          <hr />
          <li className="nav-item"><Link onClick={this.handleLink} className="landingLink" to="/projects">Projects</Link></li>
          <hr />
          <li className="nav-item"><Link onClick={this.handleLink} className="landingLink" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    );
  }
};
// const Header = () => (

//     <header>
//       <div className="logo">
//         <div>
//         <h2><Link className="headerLink" to="/">Malik Felix | Web Developer</Link></h2>
//         </div>
//       </div>
//       <button className="nav-toggle" aria-label="activate navigation">
//         <span className="hamburger"></span>
//       </button>
//       <nav className="nav">
//         <ul className="nav-list">
//           <li className="nav-item"><Link className="landingLink" to="/">Home</Link></li>
//           <li className="nav-item"><Link className="landingLink" to="/about">About</Link></li>
//           <li className="nav-item"><Link className="landingLink" to="/projects">Projects</Link></li>
//           <li className="nav-item"><Link className="landingLink" to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
  
// );

export default Header;