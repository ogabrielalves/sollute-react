import React, { Component } from 'react';
import './NavBar.css';
import LogoSollute from '../../Assets/Image/Logo2-modelo.svg';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const buttonStyle = {
    marginLeft: '40px'
  }

  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div className='divLogo'>
          <img style={{ marginLeft: '30px' }} src={LogoSollute}></img>
        </div>
        <div className='divMenu'>
          <ul>
            <li><selected><a href='#'>Home</a></selected></li>
            <li><a href='/contact'>Contato</a></li>
          </ul>
        </div>
        <div className='divBotoes'>
          <Button sx={buttonStyle} variant="contained" onClick={() => navigate("/register")}>Cadastre-se</Button>
          <Button sx={buttonStyle} variant="outlined" onClick={() => navigate("/login")}>Login</Button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;