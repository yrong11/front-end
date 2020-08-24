import 'regenerator-runtime/runtime';
import React from 'react';
import { Button, message, Space, Table } from "antd";
import { getOrders, deleteOrder } from '../../utils/actions'
import { async } from 'regenerator-runtime';
import './order.css'



class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  deleteOrder = async (orderId) => {
    const response = await deleteOrder(orderId)
    await this.getOrderData()
    if (response.status == 200) {
      this.handleLoading
      message.success("删除订单成功！");
    } else {
      message.error("删除订单失败！")
    }

  }
  componentDidMount() {
    this.getOrderData({
    })
  }

  getOrderData = async () => {

    const response = await getOrders()
    if (response.status !== 200) {
      message.error("获取订单失败！")
    }
    this.setState({
      orders: response.data
    })
    console.log(this.state)
  }



  render() {
    const columns = [{
      title: '名称',
      dataIndex: 'proName',
      key: 'proName',
      width: '20%'
    }, {
      title: '价格',
      dataIndex: 'proPrice',
      key: 'proPrice',
      width: '20%'
    }, {
      title: '单位',
      dataIndex: 'proUnit',
      key: 'proUnit',
      width: '20%'
    }, {
      title: '数量',
      dataIndex: 'number',
      key: 'number',
      width: '20%'
    }, {
      title: '操作',
      key: 'operator',
      width: '20%',
      render: (text, record) => {
        console.log(record)
        return (
          <Button type='danger' onClick={() => this.deleteOrder(record.id)}>删除</Button>
        )
      }
    }

    ]
    return (
      <div className='order'>
        <Space >
          <Table style={{ width: '750px' }} dataSource={this.state.orders} columns={columns}></Table>
        </Space>
      </div>
    )
  }
};

export default Order;