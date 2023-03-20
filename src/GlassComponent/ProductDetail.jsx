import React, { Component } from 'react'

export default class ProductDetail extends Component {
 
  render() {
    return (
      <div className="row justify-content-center text-center">
        <div className="col-6 justify-content-center d-flex">
          <div className="card-item" style={{ height: '350px' }}>
            <img src="./img/model.jpg" height={'100%'} className="model"/>
            <div>
            <img src={this.props.glassInfo.url}  className="glass-change" />
            </div>
            <div className="card-body">
              <h5 className="card-title ">{this.props.glassInfo.name}</h5>
              <p className="card-text">{this.props.glassInfo.desc}</p>
            </div>
          </div>
        </div>
        <div className="col-6 justify-content-center d-flex" style={{ height: '350px' }}>
          <img src="./img/model.jpg" height={'100%'}/>

        </div>
      </div>
    )
  }
}
