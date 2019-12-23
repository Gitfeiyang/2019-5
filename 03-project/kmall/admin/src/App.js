import React,{Component} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import api from 'api'
import {getUsername} from 'util'

import Login from 'pages/login'
import Home from 'pages/home'
import User from 'pages/user'
import Category from 'pages/category'
import Err from 'common/err'



class App extends Component{
	render(){
		// api.login({id:123})
		const HomeRoute = ({component:Component,...rest})=>{
			return (
				<Route
					render={(props)=>{
						return getUsername() ? <Component /> : <Redirect to='/login' />
					}}
				/>
			)
		}
		const LoginRoute = ({component:Component,...rest})=>{
			return (
				<Route
					render={(props)=>{
						return getUsername() ? <Redirect to='/' /> : <Component />
					}}
				/>
			)
		}
		return(
			<Router>
				<div className='App'>
				<Switch>
					<HomeRoute exact path='/' component={Home} />
					<HomeRoute path='/user' component={User} />
					<HomeRoute path='/category' component={Category} />
					<LoginRoute path='/login' component={Login} />
					<Route component={Err} />
				</Switch>
				</div>
			</Router>
		)
	}
}



export default App