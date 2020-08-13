import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Nav from './components/Nav/navigation.component';
import Homepage from './components/homepage/homepage.component';
import About from './components/AboutMe/AboutMe.component';
import Skills from './components/Skills/skills.component';
import Work from './components/Work/Work.component';
import Contact from './components/Contact/Contact.component';

const App = () => {
	return (
		<Router>
			<div className="main">
			<Nav />  
				<Switch>
					<Route path='/' exact component={Homepage}/>
					<Route path='/about' exact component={About}/>
					<Route path='/skills' exact component={Skills}/>
					<Route path='/work' exact component={Work}/>
					<Route path='/contact' exact component={Contact}/>
				</Switch>
			</div>    
		</Router>
	);
};

export default App;
