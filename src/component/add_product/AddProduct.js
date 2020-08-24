import React from 'react';
import './addProduct.css'
import { Button, Form, Input, message, Spin, InputNumber } from "antd";
import { addProduct } from '../../utils/actions'


class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false
    }

  }

  handleSubmit = async (value) => {
    this.handleLoading()
    try {
      const response = await addProduct(value);
      if (response.status == 200) {
        message.success("添加商品成功！");
      } else {
        message.error("添加商品失败！")
      }
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
    const layout = { labelCol: { span: 4 }, wrapperCol: { span: 18 } }

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div className='add-product-container'>
        <Spin spinning={this.state.isloading}>
          <h4>添加商品</h4>
          <Form
            {...layout}
            size='large'
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.handleSubmit}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="商品名:"
              name="name"
              rules={[{ required: true, message: 'Please input the product name!' }]}
            >
              <Input size='large' />
            </Form.Item>

            <Form.Item
              label="价格:"
              name="price"
              rules={[{ required: true, message: 'Please input the price!' }]}
            >
              <InputNumber min='1' style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              label='单位:'
              name='unit'
              rules={[{ required: true, message: 'Please input the unit!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='图片URL:'
              name='picURL'
              rules={[{
                required: true,
                validator: (_, value) =>
                  value && value.match(/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/) ?
                    Promise.resolve() : Promise.reject('Please input the correct picture url!')
              }]}>
              <Input />
            </Form.Item>

            <Form.Item
              className='product-item'
            >
              <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    );
  }
};

export default AddProduct;