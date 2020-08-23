import 'regenerator-runtime/runtime';
import React from 'react';
import {Button, message, Space, Table} from "antd";
import { getOrders, deleteOrder } from '../../utils/actions'
import { async } from 'regenerator-runtime';



class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  deleteOrder = async (orderId) => {
    await deleteOrder(orderId)
    await this.getOrderData()

  }
  componentDidMount() {
    this.getOrderData()
  }

  getOrderData = async() => {
    console.log(this.state)
    const response = await getOrders()
    this.setState({
          orders: response.data
        })
    // .then((response) => {
    //   this.setState({
    //     orders: response.data
    //   })
    //   console.log(this.state)
    // }).catch((e) => {
    //   console.log(e)
    // })
  }

  

  render() {
    const columns = [{
      title: '名称',
      dataIndex: 'proName',
      key: 'proName',
      width: 200
    }, {
      title: '价格',
      dataIndex: 'proPrice',
      key: 'proPrice',
      width: 80
    }, {
      title: '单位',
      dataIndex: 'proUnit',
      key: 'proUnit',
      width: 40
    }, {
      title: '数量',
      dataIndex: 'number',
      key: 'number',
      width: 40
    }, {
      title: '操作',
      key: 'operator',
      width: 80,
      render: (text, record) => {
        console.log(record)
        return (
          <Button type='danger' onClick={() => this.deleteOrder(7)}>删除</Button>
        )
      }
    }

    ]
    return (
      <div className='order'>
        <Space >
            <Table dataSource={this.state.orders} columns={columns}></Table>
        </Space>
      </div>
    )
  }
};

export default Order;