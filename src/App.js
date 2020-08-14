import React, { Component } from 'react';

import './App.css';

import DetailPage from './detailPage.js';
import CreatePage from './createPage.js';
import ListPage from './listPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="app">
      <header className="App-header">    
          <Router>
              <main>

              <div className="sidebar">
              <Link to='/create'>Create</Link>
              <Link to='/'>List</Link>
              </div>
              <div className="items">
              <Switch>
                  <Route 
                      path="/" 
                      exact
                      render={(routerProps) => <ListPage {...routerProps} />} 
                  />
                  <Route 
                      path="/create" 
                      exact
                      render={(routerProps) => <CreatePage {...routerProps} />} 
                  />
                  <Route 
                      path="/detail/:id" 
                      exact
                      render={(routerProps) => <DetailPage {...routerProps} />} 
                  />
              </Switch>
              </div>
              
              </main>
              </Router>
      </header>
      </div>
    )
  }
}



/* componentDidMount = async () => {
  const data = await fetchMonitors()
  this.setState({
    monitors: data.body
  });
} */

/* <div className="app">
          <h1>Monitor List</h1>
            <div className="items">
            {
              this.state.monitors.map((monitor) => {
                return <div className="item">
                  <ul>
                    <li><img className="image" src={monitor.image} alt={monitor.model} /></li>
                  
                    <li><h2>{monitor.brand}</h2></li>
                    <li><h3>{monitor.model}</h3></li>
                    <li>Cool factor of {monitor.cool_factor}</li>
                    <li>Is sick? {monitor.is_sick ? 'Yes' : 'No'}  </li>
                  </ul>
                </div>
              })
            }
            </div>
      </div> */