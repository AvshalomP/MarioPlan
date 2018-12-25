import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//materialize UI
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
//components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Switch>
                  {/* root */}
                  <Route exact path='/' component={Dashboard}/>
                  {/* /project */}
                  <Route exact path='/create' component={CreateProject}/>
                  <Route path='/project/:id' component={ProjectDetails}/>
                  {/* Auth */}
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
