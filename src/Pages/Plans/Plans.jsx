import React from "react";
import { Grid, Button } from "@mui/material";
import CardPrice from "../../Components/CardPrice/CardPrice";
import ImgCard1 from "../../Assets/Image/Typing-pana 1.svg";
import ImgCard2 from "../../Assets/Image/Typing-cuate 2.svg";
import ImgCard3 from "../../Assets/Image/Co-workers-cuate 3.svg";
import LogoSollute from '../../Assets/Image/Logo2-modelo.svg';




//Styles
const fundo = {
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
    textAlign: 'center'
}

const cards = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 160px'
}

const botao = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const titulo = {
    width: '72vw', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '0 160px'
}


function Preco() {
    return (

        <Grid container style={fundo} >
            <Grid mt={2}>
                <img src={LogoSollute} onClick={() => window.location.href = "/"}  style={{marginLeft: '30px', cursor: 'pointer', height: '40px'}} />
            </Grid>

            <Grid ml={4} style={titulo}>

                <h1>ESCOLHA SEU PLANO</h1>

            </Grid>

            <Grid container style={cards}>

                <Grid>
                    <CardPrice
                        titlePrice="MENSAL"
                        valor="R$ 24,90"
                        image={ImgCard1}
                        color="#511AFF"

                        variant='outlined' />
                </Grid>

                <Grid>
                    <CardPrice
                        titlePrice="SEMESTRAL"
                        valor="R$ 119,90"
                        image={ImgCard2}
                        color="#784DFF"

                        variant='contained' />
                </Grid>

                <Grid>
                    <CardPrice
                        titlePrice="ANUAL"
                        valor="R$ 169,90"
                        image={ImgCard3}
                        color="#9F80FF"

                        variant='outlined' />
                </Grid>
            </Grid>

            <Grid ml={72}>
                <Button style={botao} variant="contained" onClick={() => window.location.href = "/"}>
                    VOLTAR AO INICIO →
                </Button>
            </Grid>

        </Grid >



    );
}

export default Preco;



