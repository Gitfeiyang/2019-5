import React,{Component} from 'react'
import { Alert,Button } from 'antd'
import './index.css'
import { Link } from "react-router-dom";

class Err extends Component{
	render(){
		return(
			<div className="Err">
			 <Alert
			    message="Error"
			    description="您输入的页面走丢了，请确认是否输入正确。"
			    type="error"
			    showIcon
			    />
			    <Link to=""><Button type="link">返回首页</Button></Link>
			</div>
		)
	}
}
export default Err