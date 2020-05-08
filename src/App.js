import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import CreateUser from './components/CreateUser.Component';
import EditUser from './components/EditUser.Component';
import Index from './components/Index.Component';

class App extends Component{
    render(){
        return(
            <Router>
                <div className='container'>
                    <nav className='navbar-expand-lg navbar-light'>
                        <Link to={'/'} className='navbar-brand'>REACT CRUD APP</Link>
                        <div className='collapse navbar-collapse' id='navbarsupportedcontent'></div>
                        <ul className='navbar-nav mr-auto'>
                            <li>
                                <Link to={'/'} className='nav-link'>HOME</Link>
                            </li>
                            <li>
                                <Link to={'/CreateUser'} className='nav-link'>CREAT</Link>
                            </li>
                            <li>
                                <Link to={'/Index'} className='nav-link'>INDEX</Link>
                            </li>
                        </ul>
                    </nav>
                </div><br/>
                <h2>WELCOME</h2><br/>
                <Switch>
                    <Route exact path ='/CreateUser' component= {CreateUser}></Route>
                    <Route exact path ='/EditUser/:id' component= {EditUser}></Route>
                    <Route exact path ='/Index' component= {Index}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;