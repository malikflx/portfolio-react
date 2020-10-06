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
      <h1 className="contact-title">Contact</h1>
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




// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fname: '',
//       lname: '',
//       email: '',
//       message: '',
//       mailSent: false,
//       error: null
//     }
//   }

//   handleFormSubmit( event ) {
//     event.preventDefault();
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <>
//       <Header />
//       <section id="contact">
//         <form action="mailto:malikfelix50@gmail.com" method="get" encType="text/plain">
//           <label>First Name</label>
//           <input type="text"id="fname"name="firstname"placeholder="Your name.." value={this.state.fname} onChange={e => this.setState({ fname: e.target.value })}/>
//           <label>Last Name</label>
//           <input type="text"id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname} onChange={e => this.setState({ lname: e.target.value })}/>
//           <label>Email</label>
//           <input type="email"id="email"name="email"placeholder="Your email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
//           <label>Message</label>
//           <textarea id="message"name="subject"placeholder="Write something.." onChange={e => this.setState({ message: e.target.value })} value={this.state.message}></textarea>
//           <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit"/>
//         </form>
//       </section>
//       </>
//     );
//   }
// };

// export default Contact;
