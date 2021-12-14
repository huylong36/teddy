import { Container, Grid, Menu, MenuItem } from '@mui/material'
import Cookies from 'js-cookie'
import React from 'react'
import { useHistory } from 'react-router'
import Logo from '../../../assets/image/logo.png'
import './style.scss'
const Header = () => {
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
                        <div className="item">Home</div>
                        <div className="item">My Blog</div>
                        <div className="item">Contact</div>
                        <div className="item" onClick={handleClick}>My Profile</div>
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
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
            </Container>
        </div>
    )
}

export default Header
