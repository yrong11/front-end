import React from 'react';
import './store.css'
import {Button,message} from 'antd'
import {addOrder} from '../../utils/actions'
import {PlusOutlined} from '@ant-design/icons'
import { async } from 'regenerator-runtime';

class Product extends React.Component {

  constructor(props) {
    super(props)

  }

  createOrder = async() =>{
    const data = {
      proId: this.props.item.id,
      number: 1,
      proName: this.props.name,
      proPrice: this.props.price,
      proUnit: this.props.unit
    }
    const response = await addOrder(data)
    if (response.status == 200){
      this.handleLoading
      message.success("添加订单成功！");
    }else{
      message.error("添加订单失败！")
    }
  }

  render() {
    const {item} = this.props
    console.log(item)
    return (
      <div className='product'>
        <div className='product-img'>
        <img src={item.picURL}></img>
        </div>
        <div className='product-info'>
          <p style={{fontWeight:"bold", fontSize:'18px'}}>{item.name}</p>
          <p>单价{item.price}元/{item.unit}</p>
        </div>
        <div className='product-add'>
        <Button shape='circle' size='middle' icon={<PlusOutlined />} onClick={this.createOrder} />
        </div>
        
      </div>
    )
  }
};

export default Product;