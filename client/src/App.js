import React, {Suspense, lazy, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
//import withRouter from './withRouter';
import './App.scss';
import Layout from './components/layout/layout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';



const Home = lazy(() => import('./pages/home/Home'));
//const GamePlay = lazy(() => import('./pages/gamePlay/GamePlay'));
//const Register = lazy(() => import('./pages/register/Register'));
//const Login = lazy(() => import('./pages/login/Login'));



const RouteLoading = 'Page Loading...';

const NotFound = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

const Profile = () => {
  return(
    <div>
      Profile Page Shows Here
    </div>
  )
}

const App = props => {

  useEffect(() => {
    //props.onFetchCurrentUser();

    return () => {}
  })

  let routes = (
    <Suspense fallback={RouteLoading}>
      <Routes>
        <Route 
          exact 
          path="/" 
          element={<Home />}/>
        <Route extact path="/profile" element={<Profile />}/>
        {/* <Route extact path="/register" component={Register}/>
        <Route extact path="/login" component={Login}/>
        <Route extact path="/game_play" component={GamePlay}/> */}
        <Route component={NotFound} />
      </Routes>
    </Suspense>
  )
  
  return (
    <div className="App">
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}  

const mapDispatchToProps = dispatch => {
  return {
    onFetchCurrentUser: () => dispatch(actions.fetchCurrentUser())
  }
}


export default connect(null, mapDispatchToProps)(App);
