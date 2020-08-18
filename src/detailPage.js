import React, { Component } from 'react'
import { fetchMonitor, fetchBrands, deleteMonitor, updateMonitor } from './monitors-api.js';

export default class DetailPage extends Component {
    state = {
        monitor: {},
        cool_factor: 7,
        type: 'monitor',
        is_sick: false,
        //brand: '',
        model: '8010A',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXvdxydVBGi8bDW0dDSMxDEfiaYXF49Au1SG4kfNmYTdbayh3NRcJnisqicjctk3bdj0W9qdg&usqp=CAc',
        brands_id: 1,
        brands: [],

    }

    componentDidMount = async () => {
        const data = await fetchMonitor(this.props.match.params.id)
        const brandsData = await fetchBrands();
        const matchingBrand = brandsData.body.find(brand => brand.name === data.body.brands_id);
        console.log(matchingBrand);
        this.setState({
          brands: brandsData.body,
          monitor: data.body,
          cool_factor: data.body.cool_factor,
          type: data.body.type,
          is_sick: data.body.is_sick,
          brand: data.body.brand,
          model: data.body.model,
          image: data.body.image,
          brands_id: matchingBrand.id,

        })
      }
    
      handleSubmit = async (e) => {
          e.preventDefault();

          try {
              console.log(this.props.match.params.id)
              await updateMonitor(
                  this.props.match.params.id, 
                  {
                    cool_factor: this.state.cool_factor,
                    type: this.state.type,
                    is_sick: this.state.is_sick,
                    //brand: this.state.brand,
                    model: this.state.model,
                    image: this.state.image,
                    brands_id: this.state.brands_id,
          
                  });

                const updatedMonitor = await fetchMonitor(this.props.match.params.id)
                
                this.setState({
                    cool_factor: 7,
                    type: 'monitor',
                    is_sick: false,
                    //brand: 'Genelec',
                    model: '8010A',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXvdxydVBGi8bDW0dDSMxDEfiaYXF49Au1SG4kfNmYTdbayh3NRcJnisqicjctk3bdj0W9qdg&usqp=CAc',
                    brands_id: 1,
                    monitor: updatedMonitor.body,
                });
            } catch(e) {
                    console.log(e.message)
                }
      }

      handleCoolFactorChange = e => {
          this.setState({ cool_factor: e.target.value});
      }
      handleTypeChange = e => {
        this.setState({ type: e.target.value});
      }
      handleIsSickChange = e => {
          this.setState({ is_sick: e.target.value});
      }
      /*handleBrandChange = e => {
          this.setState({ brand: e.target.value});
      }*/
      handleModelChange = e => {
        this.setState({ model: e.target.value});
      }
      handleImageChange = e => {
        this.setState({ image: e.target.value});
      }
      handleBrandsChange = e => {
        this.setState({ brands_id: e.target.value});
      }
      handleDelete = async () => {
          await deleteMonitor(this.props.match.params.id);
          this.props.history.push('/');
      }
              
    render() {
        console.log(this.state)
        return (
            <div>
            <div>
                <img src={this.state.monitor.image} alt={this.state.monitor.model} />
               <ul>
                <li>Here is your sweet monitor: It is a {this.state.monitor.brands_id} {this.state.monitor.model}</li>
                <li>it has a coolness factor of {this.state.monitor.cool_factor}!</li>
                <li>Is this monitor sick af? {this.state.monitor.is_sick ? 'Yes' : 'No'}</li>
               </ul>
            </div>

    <h3>Update the monitor?</h3>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Cool Factor: 
                    <input onChange={this.handleCoolFactorChange} type="number" value={this.state.cool_factor} />
                </label>
                <label>
                    Type: 
                    <input onChange={this.handleTypeChange} value={this.state.type} />
                </label>
                <label>
                    Is Sick?: 
                    <input type="checkbox" value="true" onChange={this.handleIsSickChange} />
                </label>
                <label>
                    Model: 
                    <input onChange={this.handleModelChange} value={this.state.model} />
                </label>
                <label>
                    Image URL: 
                    <input onChange={this.handleImageChange} value={this.state.image} />
                </label>
                <label>
                    Brand:
                    <select onChange={this.handleBrandsChange} value={this.state.brands_id}>
                        {
                            this.state.brands.map((brand) => <option value={brand.id}>{brand.name}</option>)
                        }
                    </select>
                </label>
                <button>Update Monitor</button>
            </form>
           <button style={{ background: 'crimson'}} onClick={this.handleDelete}>Delete</button>
        </div>
        )
    }
}

         /*   <div>
                <img src={this.state.monitor.image} alt={this.state.monitor.model} />
               <ul>
                <li>Here is your sweet monitor: It is a {this.state.monitor.brand} {this.state.monitor.model}</li>
                <li>it has a coolness factor of {this.state.monitor.cool_factor}!</li>
                <li>Is this monitor sick af? {this.state.monitor.is_sick ? 'Yes' : 'No'}</li>
               </ul>
            </div> */