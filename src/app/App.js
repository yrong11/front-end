import React, {Component} from 'react';
import {Route, BrowserRouter, NavLink,Switch} from "react-router-dom";
import Store from "../component/store/Stroe";
import Order from "../component/order/Order";
import AddOrder from "../component/add_product/AddOrder";
import './app.css'
import 'bootstrap/dist/css/bootstrap.css'


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
            <Route exact path="/calculate" component={Order}></Route>
            <Route exact path="/add" component={AddOrder}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
