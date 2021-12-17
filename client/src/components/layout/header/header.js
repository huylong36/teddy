import { Container, Grid, Menu, MenuItem } from '@mui/material'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { authApi } from '../../../api/api/authApi'
import Logo from '../../../assets/image/logo.png'
import { loginUser } from '../../auth/userSlice'
import './style.scss'
const Header = () => {
    const dispatch = useDispatch()
    const token = Cookies.get("token")
    const user = useSelector(state => state.user)
    const [nameUser, setnameUser] = useState(user.user.username)
    useEffect(() => {
      if (token) {
        authApi.getUserFromToken().then((res) =>{
          if(res.data.user){
            dispatch(loginUser(res.data.user))
          }
    
      }).catch((error) =>{
          console.log(error);
      })
      }
    }, []);
    const history = useHistory();
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () =>{
    Cookies.remove("token");
    window.location.href="/"
  }
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container className="menu">
                    <Grid item md={4}>
                        <img className="logo" src={Logo} alt="logo"/>
                    </Grid>
                    <Grid item md={8} className="menu__item">
                        <div className="item" onClick={()=>history.push('/')}>Home</div>
                        <div className="item">Contact</div>
                        <div className="item">My Cart</div>
                        <div className="item" onClick={handleClick}>My Profile</div>
                        <div className="item">{token ? `Chào  ${nameUser}` : ''}</div>
                    </Grid>
                </Grid>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    {!token ?  <MenuItem onClick={()=>history.push('/')}>Login</MenuItem> : <div></div>}
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </Container>
        </div>
    )
}

export default Header
