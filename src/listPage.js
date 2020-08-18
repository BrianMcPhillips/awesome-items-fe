
import React from 'react';
import { fetchMonitors } from './monitors-api.js';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {
  state = {
    monitors: [] 
  }

  componentDidMount = async () => {
    const data = await fetchMonitors()
    

    this.setState({
      monitors: data.body,
      
    })
  }

  render() {
    return (
      <div className="monitors">
          {
            this.state.monitors.map((monitor) => {
              return <Link className="monitor" to={`/detail/${monitor.id}`} key={`${monitor.id}-${monitor.model}`}>
                <img src={monitor.image} alt={monitor.model} />
                <p>Brand: {monitor.brands_id}</p>
                <p>Model: {monitor.model}</p>
                <p>Is Sick?: {monitor.is_sick}</p>
                <p>Coolness Factor: {monitor.cool_factor}</p>
              </Link>
            })
          }
      </div>
    )
}
}

export default ListPage;