import React,{Component,Fragment} from 'react'
import './App.css'
class App extends Component{
	constructor(props){
		super(props)
		//初始化state
		this.state = {
			list:['吃饭','睡觉','睡觉觉']
		}
	}
	handelClick(){
		console.log(this)
		console.log('btn click')
	}
	handleInput(ev){
		console.log(ev.target.value)
	}
	render(){
		return (
			<div className="App">
				<input onChange={this.handleInput.bind(this)} />
				<button className="btn" onClick={this.handelClick.bind(this)}>提交</button>
				<ul className="list">
					{
					// <li>吃饭</li>
					// <li>睡觉</li>
					// <li>打豆豆</li>
					this.state.list.map((item,index)=>{
						return (<li>{item}</li>)
						})
					}
				</ul>
			</div>
			)
	}
}

export default App