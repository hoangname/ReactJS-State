import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderListGlass = () => { 
       return this.props.listGlass.map((item,index) => { 
            return (<div className='col-2' key={index}>
                 <ProductItem item={item} renderInfoGlass={this.props.renderInfoGlass} />
            </div>
           )
         })
     }
  render() {
    return (
        <div className='container list-glass'> 
          <div className="row mt-5">
            {this.renderListGlass()}
        </div>
        </div>
    )
  }
}
