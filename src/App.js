import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js'
export default class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
			<div>
				<Header />
				<Route path='/' component={Home} />
				<Footer />
				<h2>111111</h2>
			</div>
			</BrowserRouter>
		)
	}
}
