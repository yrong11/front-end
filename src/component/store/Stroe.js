import React from 'react';
import { List, Card, message, Spin } from 'antd';
import Product from './Product'
import { getStores } from '../../utils/actions'
import './store.css'
import { async } from 'regenerator-runtime';

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isloading: false
    };
  }
  componentDidMount() {
    this.getProductsData()
    console.log(this.state.products)
  }

  getProductsData = async () => {
    this.handleLoading()
    try {
      const response = await getStores()
      if (response.status !== 200) {
        message.error("获取商品列表失败！")
      }
      this.setState({
        products: response.data
      })
    } catch (e) {
      message.error("服务器端连接失败！")
    }
    this.handleLoading()
  }

  handleLoading = () => {
    this.setState({
      isloading: !this.state.isloading
    })
  }

  render() {
    return (
      <div className='store'>
        <Spin spinning={this.state.isloading}>
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
        />
        </Spin>,
      </div>
    )
  }
};

export default Store;