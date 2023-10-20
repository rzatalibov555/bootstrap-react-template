// import logo from './logo.svg';
// import './App.css';
// import { Button } from 'react-bootstrap'

// function App() {
//   return (
//     <h1>Hellooooo</h1>
//   );
// }

// export default App;


import { Component } from "react";

class App extends Component {

  state = {
    item: "old",
  };

  componentDidMount() {
    console.log("Mounted");
  } 

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    return <div>
      <p>item result: { this.state.item }</p>
      <button onClick={() => this.setState({ item: "ddddd" })}>Click</button>
    </div>;
  }
  
}

export default App;