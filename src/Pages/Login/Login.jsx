import React, {useContext, useEffect, useState} from "react";
import { Grid } from "@mui/material";
import ImagemCadastro from '../../Assets/Image/img-login.svg';
import LogoSollute from '../../Assets/Image/Logo2-modelo.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

//Styles
const leftBar = {
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '0 30px'
}

const rightBar = {
    backgroundColor: "#DAD2F1",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const botaoCadastrese = {
    width: 400,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: '#511281',
    borderColor: '#511281'
}


function Login() {

    const navigate = useNavigate()

    const { signIn, loggedIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logar(){
        signIn(email, senha)
    }

    useEffect(()=>{
        if(loggedIn){
            navigate('/dashboard')
        }
    }, [loggedIn])

    return (
        <Grid container>

            <Grid item xs={5} style={leftBar}>

                <Grid mb={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <img src={LogoSollute} alt="Logo Sollute" onClick={() => window.location.href = "/"} style={{ cursor: 'pointer' }} />
                    <Grid mt={6}>
                        <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Acesse seu Perfil da Sollute</span>
                    </Grid>
                </Grid>
                <Grid mb={2}>
                    <TextField onChange={(e)=>setEmail(e.target.value)} fullWidth size="large" id="outlined-basic" label="E-mail" variant="outlined" type={'email'} />
                </Grid>
                <Grid mb={2}>
                    <TextField onChange={(e)=>setSenha(e.target.value)} fullWidth id="outlined-basic" label="Senha" variant="outlined" type={'password'} />
                </Grid>
                <Grid>
                    <Button
                        fullWidth
                        onClick={() => logar()}
                        variant="contained"
                        >
                        Logar
                    </Button>
                    <Grid mt={2}>
                        <span style={{ fontWeight: 'bold', fontSize: 15 }}>Esqueci Minha Senha</span>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={7} style={rightBar}>

                <img width={400} src={ImagemCadastro} alt="img-cadastro" />

                <span style={{ fontWeight: 'bold', fontSize: 18 }}>Ainda não possui uma conta?</span>


                <Button fullWidth variant="contained" style={botaoCadastrese} onClick={() => window.location.href = "/register"}>Cadstre-se</Button>

            </Grid>
        </Grid >
    );
}


export default Login;