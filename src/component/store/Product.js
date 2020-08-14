import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.picURL}></img>
        <div>
          <p>{this.props.name}</p>
          <p>单价{this.props.price}元/{this.props.unit}</p>
        </div>

      </div>
    )
  }
};

export default Product;