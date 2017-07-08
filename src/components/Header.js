import React from 'react';
import {Button} from 'antd';
export default class Header extends React.Component{
	constructor(){
		super()
	
	}
	render(){
		return(
			
			<header className='header'>
			<h1>cnode</h1>
		
			<Button type="primary">登录</Button>
			</header>
			)
	}
}