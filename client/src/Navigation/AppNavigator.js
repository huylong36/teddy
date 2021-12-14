import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { authApi } from "../api/api/authApi";
import Login from '../components/auth/LoginForm';
import Register from '../components/auth/RegisterForm';
import { loginUser } from "../components/auth/userSlice";
import { CreateProduct } from "../components/createProduct/createProduct";
import Layout from "../components/layout/Layout";
import { MainNavigator } from "./MainNavigator";

export const AppNavigator = () => {
  const dispatch = useDispatch()
  const token = Cookies.get("token")
useEffect(() => {
  if (token) {
    authApi.getUserFromToken().then((res) =>{
      console.log('xxxxxxx' , res);
      if(res.data.user){
        dispatch(loginUser(res.data.user))
      }

  }).catch((error) =>{
      console.log(error);
  })
  }
}, []);
  return (
    <>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/layout" exact component={Layout} />
            <Route path="/create-product" exact component={CreateProduct} />
            <MainNavigator />
          </Switch>
        </Router>
    </>
  );
};
