import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import List from './List';
import Insert from './Insert';
import Update from './Update';
import {Route,Switch,Redirect} from 'react-router-dom';

function App() 
{
	return(<>
	  <Switch>
	    <Route exact path="/" component={List}/>
	    <Route exact path="/insert" component={Insert}/>
	    <Route exact path="/update/:id/:username/:email" component={Update}/>
	    <Redirect to="/"/>
	 </Switch>
	</>);
}

export default App;