import React,{Component} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import ProductList from './list.js'
import ProductSave from './save.js'
import ProductDetail from './detail.js'


class Product extends Component{
	render(){
		return (
			<div className='Product'>
				<Switch>
					<Route exact path='/product/' component={ProductList} />
					<Route path='/product/save/:productId?' component={ProductSave} />
					<Route path='/product/detail/:productId?' component={ProductDetail} />
				</Switch>
			</div>
		)
	}
}

export default Product