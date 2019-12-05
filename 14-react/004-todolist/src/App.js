import React,{Component,Fragment} from 'react'
import './App.css'
import Item from './Item.js'
class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:['吃饭','睡觉','睡觉觉'],
			task:''
		}
		this.handleInput = this.handleInput.bind(this)
	}
	handelAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState({
			list:list,
			task:''
		})
	}
	handleInput(ev){
		this.setState({
			task:ev.target.value	
		})
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
	getItems(){
		this.state.list.map((item,index)=>{
			return (
				<Item 
					key={index} 
					task={item} 
					list={this.state.list} 
					index={index}
					handleDel = {this.handleDel.bind(this,index)}
					 />
				)
			})
	}
	render(){
		return (
			<div className="App">
				<input onChange={this.handleInput.bind(this)} value={this.state.task}/>
				<button className="btn" onClick={this.handelAdd.bind(this)}>提交</button>
				<ul className="list">
					{
					this.state.list.map((item,index)=>{
			return (
				<Item 
					key={index} 
					task={item} 
					list={this.state.list} 
					index={index}
					handleDel = {this.handleDel.bind(this,index)}
					 />
				)
			})
					}
				</ul>
			</div>
			)
	}
}

export default App




