import React,{Component} from 'react'
import { connect } from 'react-redux'
import {actionCreator} from './store/index.js'
import { Breadcrumb,Form, Select, Input, Button, InputNumber } from 'antd'

const { Option } = Select
import './index.css'
import Layout from 'common/layout'
import UploadImage from 'common/upload-image'
import RichEditor from 'common/rich-editor'

import {UPLOAD_PRODUCT_IMAGE,UPLOAD_PRODUCT_DETAIL_IMAGE} from 'api/config.js'

class ProductSave extends Component{
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			productId:this.props.match.params.productId
		}
	} 
	componentDidMount(){
		//获取最新父级分类数据
		this.props.handleLevelCategories()
	}
	handleSubmit(e){
    	e.preventDefault();
		this.props.form.validateFields((err, values) => {
		    if (!err) {
		        // console.log(values)
		        this.props.handleSave(values)
		    }
		});
	}
	render(){
		const { getFieldDecorator } = this.props.form
		const { 
			categories,
			handleMainImage,
			handleImages,
			handleDetail,
		 } = this.props
		// console.log(categories)
		return (
			<div className='ProductSave'>
				<Layout>
					<Breadcrumb style={{ margin: '16px 0' }}>
			          <Breadcrumb.Item>首页</Breadcrumb.Item>
			          <Breadcrumb.Item>商品管理</Breadcrumb.Item>
			          <Breadcrumb.Item>编辑商品</Breadcrumb.Item>
			        </Breadcrumb>
			        <div className='content'>	
			        	<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
					        <Form.Item label="分类名称">
					          {getFieldDecorator('category', {
					            rules: [{ required: true, message: '请选择商品分类' }],
					          })(
					            <Select
					              placeholder="请选择商品分类"
					            >
					              {
					              	categories.map((category)=>{
					              		return <Option key={category.get('_id')} value={category.get('_id')}>{category.get('name')}</Option>
					              	})
					              }
					            </Select>,
					          )}
					        </Form.Item>
					        <Form.Item label="商品名称">
					          {getFieldDecorator('name', {
					            rules: [{ required: true, message: '请输入商品名称' }],
					          })(<Input />)}
					        </Form.Item>
					        <Form.Item label="商品描述">
					          {getFieldDecorator('description', {
					            rules: [{ required: true, message: '请输入手机分类名称' }],
					          })(<Input />)}
					        </Form.Item>
					        <Form.Item label="商品价格">
					          {getFieldDecorator('price', {
					            rules: [{ required: true, message: '请输入商品价格' }],
					          })(<InputNumber min={0} />)}
					        </Form.Item>
					        <Form.Item label="商品库存">
					          {getFieldDecorator('stock', {
					            rules: [{ required: true, message: '请输入商品库存' }],
					          })(<InputNumber min={0} />)}
					        </Form.Item>
					        <Form.Item
					        	label="封面图片"
					        	required={true}
					        	validateStatus='error'
					        	help='请上传图片'
					        >
					        	<UploadImage  
					          		max={1}
					          		action={UPLOAD_PRODUCT_IMAGE}
					          		getFileList = {(fileList)=>{
					          			handleImages(fileList)
					          			// console.log('father::',fileList)
					          		}}
					          		// fileList = {mainImageList}
					          	/>
					        </Form.Item>
					        <Form.Item label="商品图片">
					        	<UploadImage  
					          		max={5}
					          		action={UPLOAD_PRODUCT_IMAGE}
					          		getFileList = {(fileList)=>{
					          			handleMainImage(fileList)
					          			// console.log('father::',fileList)
					          		}}
					          	/>
					        </Form.Item>
					        <Form.Item label="商品详情">
					        	<RichEditor
					        		url={UPLOAD_PRODUCT_DETAIL_IMAGE}
					        		getValues={(values)=>{
					        			handleDetail(values)
					        		}}
					        	 />
					        </Form.Item>
					        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
					          <Button type="primary" onClick={this.handleSubmit}>
					            提交
					          </Button>
					        </Form.Item>
					    </Form>
			        </div>
				</Layout>
			</div>
		)
	}
}
const WrappedProductSave = Form.create({ name: 'coordinated' })(ProductSave)
//将属性映射到组件中
const mapStateToProps = (state)=>{
	return {
		categories:state.get('product').get('categories')
	}
}
//将方法映射到组件
const mapDispatchToProps = (dispatch)=>{
	return {
		handleSave:(values)=>{
			dispatch(actionCreator.getSaveProductAction(values))
		},
		handleLevelCategories:()=>{
			dispatch(actionCreator.getLevelCategoriesAction())
		},
		handleMainImage:(fileList)=>{
			dispatch(actionCreator.getMainImageAction(fileList))
		},
		handleImages:(fileList)=>{
			dispatch(actionCreator.getImagesAction(fileList))
		},
		handleDetail:(values)=>{
			dispatch(actionCreator.getDetailAction(values))
		},
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(WrappedProductSave)
