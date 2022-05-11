import './NavBar.css';
import LogoSollute from '../../Assets/Image/Logo2-modelo.svg';
import Button from '@mui/material/Button';

import React, { Component } from 'react';

class NavBar extends Component {
  state = {}
  render() {
    const buttonStyle = {      
      marginLeft: '40px'
    }
    return (
      <div>
        <header>
          <div className='divLogo'>
            <img style={{ marginLeft: '30px' }} src={LogoSollute}></img>
          </div>
          <div className='divMenu'>
            <ul>
              <li><selected><a href='#'>Home</a></selected></li>
              <li><a href='/plans'>Planos</a></li>
              <li><a href='/contact'>Contato</a></li>
            </ul>
          </div>
          <div className='divBotoes'>
            <Button sx={buttonStyle} variant="contained" onClick={() => window.location.href = "/register"}>Cadastre-se</Button>
            <Button sx={buttonStyle} variant="outlined" onClick={() => window.location.href = "/login"}>Login</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;