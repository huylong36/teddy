import { Button, FormControl, TextField } from '@mui/material'
import { useSnackbar } from 'notistack';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { authApi } from '../../api/api/authApi';

const RegisterForm = () => {
    const username = useRef();
    const password = useRef();
    const passwordHint = useRef();
    const age = useRef();
    const phone = useRef();
    const email = useRef();
    const {enqueueSnackbar} = useSnackbar()
    const register = async () =>{
        const registerForm = {
             username :username.current.value,
             password :password.current.value,
             passwordHint : passwordHint.current.value, 
             age : passwordHint.current.value, 
             phone : passwordHint.current.value, 
             email : passwordHint.current.value, 
            }
            if(username||password||passwordHint||age||phone||email){
                enqueueSnackbar('sai',{variant:"error"})
            }
        try {
            const registerData = await authApi.register(registerForm);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="total">
        <FormControl className="form-login register">
            <h2>Register</h2>
            <TextField className="input-login" required id="standard-basic" label="Username" variant="outlined" inputRef={username} />
            <TextField className="input-login" required id="standard-basic" type="password" label="Password" variant="outlined" inputRef={password} />
            <TextField className="input-login" required id="standard-basic" type="password" label="ConfirmPassword" variant="outlined" inputRef={passwordHint}/>
            <TextField className="input-login" required id="standard-basic" label="Age" variant="outlined" inputRef={age}/>
            <TextField className="input-login" required id="standard-basic" label="Phone" variant="outlined" inputRef={phone}/>
            <TextField className="input-login" required id="standard-basic" label="Email" variant="outlined" inputRef={email}/>
            <Button variant="contained" size="medium" color="success" onClick={() =>register() }>Register</Button>
            <div className="not_acount">Already have an acount ? <Link to='/'><Button variant='text' size="small" className="register-btn">Login</Button></Link></div>
        </FormControl>
        </div>
    )
}

export default RegisterForm
