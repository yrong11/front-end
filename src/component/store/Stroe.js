import React from 'react';
import Product from './Product'
import {getStores} from '../../utils/actions'
import './store.css'

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
    getStores().then((response) => {
      this.setState({
        products: response.data
      })
      console.log(this.state)
    }).catch((e) => {
            console.log(e)
    })
  }

  createOrder(orderData) {

  }

  render() {
    const products = this.state.products;
    return (
      <div className='store'>
        {products.map((item) => (
          <Product
            key={item.id}
            item={item}
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