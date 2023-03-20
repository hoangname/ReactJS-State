import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {item} = this.props
        return (
                <button className='btn btn-sucess' onClick={() => { 
                    this.props.renderInfoGlass(item)
                }}>
                    <img src={item.url} className="img-fluid"/>
                </button>
        )
    }
}
