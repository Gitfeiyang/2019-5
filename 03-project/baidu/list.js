import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import moment from 'moment'
import './index.css'
import { Breadcrumb,Table,Button   } from 'antd'

import {
	Link,
} from "react-router-dom";
import {actionCreator} from './store/index.js'
import Layout from 'common/layout'

 
//容器组件
class CategoryList extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		this.props.handlePage(1)
	}
	render(){
		const columns = [
		  {
		    title: '用户名',
		    dataIndex: 'username',
		    key: 'username',
		    render: text => <a>{text}</a>,
		  },
		  {
		    title: '是否是管理员',
		    dataIndex: 'isAdmin',
		    key: 'isAdmin',
		    render:(isAdmin)=>(isAdmin ? '是' : '否')
		  },
		  {
		    title: 'email',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: '电话',
		    key: 'phone',
		    dataIndex: 'phone',
		  },
		  {
		    title: '创建时间',
		    key: 'createdAt',
		    dataIndex: 'createdAt',
		  },
		]
		const { list,current,pageSize,total,handlePage,isFecthing } = this.props
		const dataSource = list.map((user)=>{
			return {
				key:user.get('_id'),
				username:user.get('username'),
				isAdmin:user.get('isAdmin'),
				email:user.get('email'),
				phone:user.get('phone'),
				createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss'),
			}
		}).toJS()
		return(
			<div className='CategoryList'>
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>分类管理</Breadcrumb.Item>
			          <Breadcrumb.Item>分类列表</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className='btn'>
			        	<Link to='/category/add'><Button type="primary">新增分类</Button></Link>
			        </div>
			        <div className='content'>
			        	<Table 
							columns={columns} 
							dataSource={dataSource} 
							pagination ={{
								current:current,
								pageSize:pageSize,
								total:total
							}}
							onChange={(page)=>{
								handlePage(page.current)
							}}
							loading={{
								spinning:isFecthing,
								tip:'数据玩命加载中,请稍等'
							}}
						/>
			        </div>
				</Layout>
			</div>	
		)
	}
}




//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		list:state.get('user').get('list'),
		pageSize:state.get('user').get('pageSize'),
		current:state.get('user').get('current'),
		total:state.get('user').get('total'),
		isFecthing:state.get('user').get('isFecthing'),
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleAdd:(page)=>{
			// dispatch(actionCreator.getPageAction(page))
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)