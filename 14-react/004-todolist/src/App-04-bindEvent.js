import React,{Component,Fragment} from 'react'
import './App.css'
class App extends Component{
	handelClick(){
		console.log(this)
		console.log('btn click')
	}
	render(){
		return(
			<div className="App">
				<input />
				<button className="btn" onClick={this.handelClick.bind(this)}>提交</button>
				<ul className="list">
					<li>吃饭</li>
					<li>睡觉</li>
					<li>打豆豆</li>
				</ul>
			</div>
			)
	}
}

export default App