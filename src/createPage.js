import React, { Component } from 'react'
import { createMonitor, fetchBrands } from './monitors-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        cool_factor: 7,
        type: 'monitor',
        is_sick: false,
        model: '8010A',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXvdxydVBGi8bDW0dDSMxDEfiaYXF49Au1SG4kfNmYTdbayh3NRcJnisqicjctk3bdj0W9qdg&usqp=CAc', 
        brands_id: 1,
        brands: [],
    }

    componentDidMount = async () => {
        const brandsData = await fetchBrands();
        this.setState({
            brands: brandsData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await createMonitor({
          cool_factor: this.state.cool_factor,
          type: this.state.type,
          is_sick: this.state.is_sick,
          model: this.state.model,
          image: this.state.image,
          brands_id: this.state.brand_id
        
        });

        this.setState({
          cool_factor: 7,
          type: '',
          is_sick: '',
          model: '',
          image: '',
          brands_id: 1,
        
        });
        this.props.history.push('/');
    } catch(e) {
        console.log(e.message)
    }
}

    handleCoolFactorChange = e => {
        this.setState({ cool_factor: e.target.value });
    }

    handleTypeChange = e => {
        this.setState({ type: e.target.value });
    }

    handleIsSickChange = e => {
        this.setState({ is_sick: e.target.value });
    }

    handleBrandChange = e => {
        this.setState({ brand_id: e.target.value });
    }

    handleModelChange = e => {
        this.setState({ model: e.target.value });
    }

    handleImageChange = e => {
        this.setState({ image: e.target.value});
    }

    render() {
        return (
            <div className="content">
                <h2>CREATE!</h2>
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
                        Brand: 
                        <select onChange={this.handleBrandChange} value={this.state.brand}>
                            {
                                this.state.brands.map((brand, i) => {
                                    return <option key={'brand' + i} value={brand.id} >{brand.name}</option>
                                })
                            }
                        </select> 
                    </label>
                    <label>
                        Model: 
                        <input onChange={this.handleModelChange} value={this.state.model} />
                    </label>
                    <label>
                        Image link: 
                        <input onChange={this.handleImageChange} value={this.state.image} />
                    </label>
                    
                    <button>Make Item</button>
                </form>
            </div>
        )
    }
}