import CartWidget from "./CartWidget"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../context/AppContext';

const pages = [{ id: 'products', title: 'Products'}];

const navItems = ['Inicio', 'Productos', 'Contacto'];

const Navbar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const { quantityCart } = React.useContext(AppContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavigate = (id) => {
    navigate('/' + id);
  }

  return (
  <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleOpenNavMenu}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon> {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handleNavigate(page.id)}>                
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
                ))} 
                </MenuIcon> 
        </IconButton>
        <Typography
          variant="h8"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        > Tienda Online
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Link key={item} style={{ color: '#fff' }}>
              {item}
            </Link>
          ))}
        </Box>
        {quantityCart === 0 ?
            null
            :
            <Box sx={{ flexGrow: 0 }}>
                <CartWidget cartQuantity={quantityCart} />
          </Box>} 
    </Toolbar>
    </AppBar>
      <Toolbar />
    </Box>
);
};

export default Navbar;