import React,{Component,Fragment} from 'react'
import './App.css'
class App extends Component{
	render(){
		return(
			<div className="App">
			{
				// <input style={{width:500}}/><button className="btn">提交</button>
			}
				<input />
				<button className="btn">提交</button>
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