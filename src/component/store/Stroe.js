import React from 'react';
import Product from './Product'

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProductsData()
  }
  getProductsData = () => {
    fetch('http://localhost:8080/store', { method: 'GET' })
      .then((response) => {
        if (response.ok) {
          console.log(response.json())
          return response.json();
        } else {
          throw new Error('get products error!')
        }
      }).then((json) => {
        this.setState({
          products: json
        })
      }).catch((e) => {
        console.log(e)
      })
  }

  render() {
    const products = this.state.products;
    return (
      <div>
        {products.map((item) => (
          <Product
            id={item.id}
            name={item.name}
            price={item.price}
            unit={item.unit}
            picURL={item.picURL} />))}
      </div>
    )
  }
};

export default Store;