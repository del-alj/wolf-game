import './App.css';
import React from 'react';
import Json from './components/data/json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      t: 2
    };
  }
  render() {
    return (
      <div className="App">
        <Json index={this.state.t}/>
        
     </div>
    )
  }
}
export default App;
