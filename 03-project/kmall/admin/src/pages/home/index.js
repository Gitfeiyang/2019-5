import React,{Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import './index.css'
import { Input,Button,Row,Col,List   } from 'antd'

import {actionCreator} from './store/index.js'
import Layout from 'common/layout'


//容器组件
class Home extends Component{
	render(){
		return(
			<div className='Home'>
			<Layout>
			首页
			</Layout>
			</div>	
		)
	}
}

//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)