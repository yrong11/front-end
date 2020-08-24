import React from 'react';
import { List, Card } from 'antd';
import Product from './Product'
import { getStores } from '../../utils/actions'
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

  render() {
    return (
      <div className='store'>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.products}
          renderItem={item => (
            <List.Item>
            <Product
            key={item.id}
            item={item}
            id={item.id}
            name={item.name}
            price={item.price}
            unit={item.unit}
            picURL={item.picURL} />
            </List.Item>
          )}
        />,
      </div>
    )
  }
};

export default Store;