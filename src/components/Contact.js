import React from 'react';
import axios from 'axios';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import MalikContact from '../img/Malik-headshot-contact.jpg';

class Contact extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Your message has been received! I'll be in touch with you shortly."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(
    <>
    <Header />
  	<section id="contact-main">
    <div className="contact-form-space">
    <div className="contact-photo-box">
      <img className="contact-photo" src={ MalikContact } alt="malik-headshot"/> 
    </div>
    <div className="form-box">
      <h1 className="contact-title">Talk to Me</h1>
      <form id="contact" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	  <div className="form-group">
      	<label className="label-name" htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} placeholder="Full name..." onChange={this.onNameChange.bind(this)} />
  	  </div>
  	  <div className="form-group">
      	<label className="label-name" htmlFor="exampleInputEmail1">Email Address</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} placeholder="Your Email..." onChange={this.onEmailChange.bind(this)} />
  	  </div>
  	  <div className="form-group">
      	<label className="label-name" htmlFor="message">Message</label>
      	<textarea className="form-control" rows="1" id="message" value={this.state.message} placeholder="Write your message here..." onChange={this.onMessageChange.bind(this)} />
  	  </div>
  	  <input type="submit" className="btn btn-primary" value="Submit"/>
  	  </form>
    </div>
    
  	
    </div>
  	</section>
      <Footer/>
    </>
    
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default Contact;