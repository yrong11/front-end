import React, {Component} from 'react';
import {HomeOutlined, ShoppingCartOutlined, PlusOutlined} from '@ant-design/icons'
import {Route, BrowserRouter, NavLink,Switch} from "react-router-dom";
import Store from "../component/store/Stroe";
import Order from "../component/order/Order";
import './app.css'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import AddProduct from '../component/add_product/AddProduct';


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className="header">
            <ul>
              <li><NavLink className="link" exact to="/" activeClassName="active">商城</NavLink></li>
              <li><NavLink className="link" exact to="/order">订单</NavLink></li>
              <li><NavLink className="link" exact to="/add">添加商品</NavLink></li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Store}></Route>
            <Route exact path="/order" component={Order}></Route>
            <Route exact path="/add" component={AddProduct}></Route>
          </Switch>
        </BrowserRouter>
        <div className='footer' style={{paddingBottom:'25px'}}>
          TW Mall @2018 Created by ForCheng
        </div>
      </div>
      
    );
  }
}

export default App;
