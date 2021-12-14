import { FormControl, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { authApi } from '../../api/api/authApi';
import './auth.scss';
import { loginUser } from './userSlice';

const LoginForm = (props) => {
   
    const dispatch = useDispatch()
    const username = useRef()
    const password = useRef()
    const history = useHistory();
    const stateUser = useSelector(state => state.user)
    const token = Cookies.get("token")
    useEffect(() => {
        if (token && stateUser.user) {
          history.push('/layout');
        }
      }, [stateUser]);

    const login = async (props) => {
        const loginForm = {
            username: username.current.value,
            password: password.current.value
        }
        try {
            const loginData = await  authApi.login(loginForm)
            Cookies.set('token' , loginData.data.accessToken)
            dispatch(loginUser(loginData.data.user))
            history.push('/layout')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="total">
        <FormControl  className="form-login">
            <h2>Login</h2>
            <TextField
             className="input-login" id="standard-basic" required={true} name="username" label="Username" variant="outlined" inputRef={username} />
            <TextField className="input-login" id="standard-basic" type="password" name="password" label="Password" variant="outlined" inputRef={password} />
            <Button variant="contained"  size="medium" color="success" onClick={()=>login()}>Login</Button>
            <div className="not_acount">Don't have an acount ? <Link to='register'><Button variant='text' size="small" className="register-btn">Register</Button></Link></div>
        </FormControl>
        </div>
    )
}

export default LoginForm
