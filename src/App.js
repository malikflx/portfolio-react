import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Landing } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/contact" component={ Contact } />
    </div>
  );
}

// class App extends Component {
//   state = {
//       data: null
//     };
  
//     componentDidMount() {
//         // Call our fetch function below once the component mounts
//       this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }
//     //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//     // callBackendAPI = async () => {
//     //   const response = await fetch('/express_backend');
//     //   const body = await response.json();
  
//     //   if (response.status !== 200) {
//     //     throw Error(body.message) 
//     //   }
//     //   return body;
//     // };
  
//     render() {
//       return (
//         <div className="App">
//           <Route exact path="/" component={ Landing } />
//           <Route exact path="/about" component={ About } />
//           <Route exact path="/projects" component={ Projects } />
//           <Route exact path="/contact" component={ Contact } />
//           <p className="App-intro">{this.state.data}</p>
//         </div>
//       );
//     }
//   }
// function App() {
  // return (
  //   <div className="App">
  //     <Route exact path="/" component={ Landing } />
  //     <Route exact path="/contact" component={ Contact } />
  //   </div>
  // );
// }

export default App;
