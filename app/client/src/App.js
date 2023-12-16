import React, {Suspense, lazy, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout/layout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';

const Home = lazy(() => import('./pages/home/Home'));
const GamePlay = lazy(() => import('./pages/gamePlay/GamePlay'));
const Register = lazy(() => import('./pages/register/Register'));
const Login = lazy(() => import('./pages/login/Login'));


const LoadIndicator = () => (
  <div className="loadIndicator">
      <div className="loadText">
          Loading . . .
      </div>
  </div>
)  

const NotFound = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);


const App = props => {

  useEffect(() => {
    //TO-DO: PENDING BASK END CALL
    //props.onFetchCurrentUser();
    return () => {}
  })

  let routes = (
    <Suspense fallback={<LoadIndicator />}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route extact path="/game_play" element={<GamePlay />}/>
        <Route extact path="/register" element={<Register />}/>
        <Route extact path="/login" element={<Login />}/>
        <Route element={NotFound} />
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
