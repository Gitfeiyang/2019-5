import React,{Component} from 'react'
import { Layout, Menu, Dropdown, Breadcrumb, Icon } from 'antd'
import './index.css'
import {getUsername} from 'util'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

class AdminHeader extends Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout(){
    console.log('aaa')
  }
  render(){
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={this.handleLogout}>
          <Icon type="logout" />退出
        </Menu.Item>
      </Menu>
    )
    return(
        <div className="AdminHeader">
          <Header className="header">
            <div className="logo">
                KMALL 后台管理系统
            </div>
             <Dropdown overlay={menu} trigger={['click']} className="drop-down">
                <a className="ant-dropdown-link" href="#">
                  {getUsername()}<Icon type="down" />
                </a>
              </Dropdown>
          </Header>
        </div>
      ) 
  }
}
export default AdminHeader