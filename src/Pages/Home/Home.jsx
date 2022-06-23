import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Home.css';
import ImagemCentral from '../../Assets/Image/Manage money-rafiki 1.svg';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

function Home() {

  const navigate = useNavigate();
  
  return (
    <div b>
      <NavBar />
      <div className='container'>
        <div className='containerText'>
          <h1>Estoque Certo</h1>
          <p>A Empresa Sollute agora tem o Estoque Certo, </p>
          <p>O melhor serviço para te ajudar com o seu comercio.</p>
          <p>O que há de melhor em te ajudar a ser maior,</p>
          <p>Integração, facilidade, automatização, eficiência e agilidade em um só serviço.</p>
          <Button
            style={{ marginTop: 15, fontSize: '1.2rem' }}
            variant="contained"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </Button>
        </div>
        <div className="containerImage">
          <img className='' src={ImagemCentral} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;