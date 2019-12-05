import React,{Component} from 'react'

class Item extends Component{
	constructor(props){
			super(props)
		}
		/*
	handleDelete(index){
			console.log(this.props.list)
			this.props.list.splice(index,1)
			console.log(this.props.list)
		}
		*/
	render(){
		return(
			// <li onClick={this.handleDelete.bind(this,this.props.index)}>{this.props.task}</li>
			<li onClick={this.props.handleDel}>{this.props.task}</li>
		)
	}
}
export default Item