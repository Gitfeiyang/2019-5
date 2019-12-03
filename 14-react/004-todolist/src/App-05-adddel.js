import React,{Component,Fragment} from 'react'
import './App.css'
class App extends Component{
	constructor(props){
		super(props)
		// 初始化state
		this.state = {
			list:['吃饭','睡觉','睡觉觉'],
			task:''
		}
	}
	handelAdd(){
		/*
		console.log('btn click')
		console.log(this.state)
		this.state.list.push(this.state.task)
		console.log(this.state)
		*/
		// console.log(this.state)
		const list = [...this.state.list,this.state.task]
		this.setState({
			list:list,
			task:''
		})
	}
	handleInput(ev){
		/*
		console.log(ev.target.value)
		console.log(this.state)
		this.state.task = ev.target.value
		console.log(this.state)
		*/
		this.setState({
			task:ev.target.value	
		})
	}
	handleDel(index){
		console.log(index)
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
	render(){
		return (
			<div className="App">
				<input onChange={this.handleInput.bind(this)} value={this.state.task}/>
				<button className="btn" onClick={this.handelAdd.bind(this)}>提交</button>
				<ul className="list">
					{
					// <li>吃饭</li>
					// <li>睡觉</li>
					// <li>打豆豆</li>
					this.state.list.map((item,index)=>{
						return (
							<li 
								key={index}
								onClick={this.handleDel.bind(this,index)}
							>
								{item}
							</li>
							)
						})
					}
				</ul>
			</div>
			)
	}
}

export default App