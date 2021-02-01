import React, { Component } from 'react'
import { fetchMonitor } from './monitors-api.js';

export default class DetailPage extends Component {
    state = {
        monitor: {}
    }

    componentDidMount = async () => {
        const data = await fetchMonitor(this.props.match.params.id)
    
        this.setState({
          monitor: data.body
        })
      }
    

    render() {
        return (
            <div>
                <img src={this.state.monitor.image} alt={this.state.monitor.model} />
               <ul>
                <li>Here is your sweet monitor: It is a {this.state.monitor.brand} {this.state.monitor.model}</li>
                <li>it has a coolness factor of {this.state.monitor.cool_factor}!</li>
                <li>Is this monitor sick af? {this.state.monitor.is_sick ? 'Yes' : 'No'}</li>
               </ul>
            </div>
        )
    }
}