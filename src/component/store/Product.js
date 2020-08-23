import React from 'react';
import './store.css'
import {addOrder} from '../../utils/actions'
import {PlusOutlined} from '@ant-design/icons'

class Product extends React.Component {

  constructor(props) {
    super(props)

  }

  createOrder = () =>{
    const data = {
      proId: this.props.item.id,
      number: 1,
      proName: this.props.name,
      proPrice: this.props.price,
      proUnit: this.props.unit
    }
    addOrder(data)
  }

  render() {
    const {item} = this.props
    console.log(item)
    return (
      <div className='product'>
        <img src={item.picURL}></img>
        <div>
          <p>{item.name}</p>
          <p>单价{item.price}元/{item.unit}</p>
        </div>
        <button icon={<PlusOutlined />} onClick={this.createOrder} />
      </div>
    )
  }
};

export default Product;