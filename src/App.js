import React from 'react';

import './App.css';
import { fetchMonitors } from './monitors-api.js';
//import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    monitors: []
  }

  componentDidMount = async () => {
    const data = await fetchMonitors()
    this.setState({
      monitors: data.body
    });
  }

  render() {
    return (
      <div className="app">
          <h1>Monitor List</h1>
            <div className="items">
            {
              this.state.monitors.map((monitor) => {
                return <div className="item">
                  <img className="image" src={monitor.image} alt={monitor.model} />
                  <ul>
                    <li><h2>{monitor.brand}</h2></li>
                    <li><h3>{monitor.model}</h3></li>
                    <li>Cool factor of {monitor.cool_factor}</li>
                    <li>Is sick? {monitor.is_sick ? 'Yes' : 'No'}  </li>
                  </ul>
                </div>
              })
            }
            </div>
      </div>
    )
  }
}
export default App;
