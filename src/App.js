import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import {useDispatch} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  // Who the Current User OR to Know the user singIn 
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(authUser=>{
        if(authUser){
          //Logged in
          console.log('authUser :>> ', authUser);
          dispatch(login({
            uid: authUser.uid,
            email: authUser.email
          }))
        }else{
          // Logged out
            dispatch(logout())
          }
     })
     return unsubscribe
  },[])
 
  return (
      <div className="app">
        <Router>

            {!user ? (
                <LoginScreen />
              ):(
              <Switch>
                <Route path="/profile">
                  <ProfileScreen />
                </Route>
                <Route exact path="/">
                   <HomeScreen />
                   <h3> Netflix Build 🤷‍♂️😍</h3>
                </Route>
              </Switch>
           )}
        </Router>

      </div>

  );
}

export default App;
