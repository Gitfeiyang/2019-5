import React,{Component} from 'react'
import {  Layout, Menu, Icon } from 'antd'
import { NavLink } from "react-router-dom";
import './index.css'
const { SubMenu } = Menu;
const { Sider } = Layout;

import Header from 'common/header'
class AdminSider extends Component{
  render(){
    return (
        <div className="AdminLayout">
           <Sider width={200} style={{ background: '#fff',minHeight:760 }}>
            <Menu
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="1">
                <NavLink exact to='/'>首页</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                <NavLink to='/user'>用户管理</NavLink>
                </Menu.Item>

              </Menu>
            </Sider>
        </div>
      )
  }
}
export default AdminSider