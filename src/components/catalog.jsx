import React, { Component } from 'react';
import Item from './item';
import ItemService from '../services/itemservice';

import "./catalog.css";

class Catalog extends Component {
    state = { 
        catalog: [],
        categories: [],
        filter: "",
     };

    render() {
         
        let itemsToDisplay = this.state.catalog;
        if(this.state.filter) {
            itemsToDisplay =itemsToDisplay.filter((item) => item.category === this.state.filter );
        }

        return ( 
            <div className="catalog">
                <h3>Our Catalog</h3>
                <h5>Plenty of {this.state.catalog.length} Flower to choose from</h5>

            <div className="filter-buttons">
                <button className="btn btn-dark" onClick={this.clearFilter}>
                    Show all
                </button>
                {this.state.categories.map((cat) => (
                    <button
                        onClick={() =>
                            {this.filterByCat(cat);
                        }}
                            key={cat}
                            className="btn btn-info"
                           >
                             {cat}
                            </button>
                ))}
            </div>
               
            <div className= "item-container">
                {itemsToDisplay.map((obj) => (
                    <Item key={obj._id} data={obj}></Item>
                ))}
            </div>
        </div>
      );
    }

    clearFilter = () => {
        this.setState({ filter: " "});
    };

    filterByCat = (cat) => {
        this.setState({filter: cat});
    };

 
// best place to load data from server
// exicuted after the initail render
    componentDidMount() {
        let service = new ItemService();
        let data = service.getCatalog();

        let categories = [];
        for(let i =0; i < data.length; i++) {
            let category = data[i].category;

            if(!categories.includes(category)) {
                categories.push(category);
            }
        }


        this.setState({ catalog: data, categories: categories });
    }

}

export default Catalog;