import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';

import ContactPage from '../../Components/ContactPage/ContactPage';

class Contact extends Component {
    state = {}
    render() {
        return (
            <ContactPage>
                <Grid style={{ flexDirection: 'column' }}>
                    <h1>Converse Conosco</h1>
                    <p style={{ width: '60%', color: '#8E8E8E' }}>
                        Você pode entrar em contato conosco a qualquer momento via <b style={{ color: '#3E00FF' }}>Sollute@gmail.com</b>
                    </p>
                    <Grid item xs={12} md={10} mt={8} mb={4}>
                        <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={10} mb={4}>
                        <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" type={'email'} />
                    </Grid>
                    <Grid item xs={12} md={10} mb={4}>
                        <TextField fullWidth id="outlined-basic" label="Celular" variant="outlined" type={'tel'} />
                    </Grid>
                    <Grid item xs={12} md={10} mb={4}>
                        <TextField multiline
                            rows={4} fullWidth id="outlined-basic" label="Como podemos te ajudar?" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            style={{ width: '30%' }}
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </ContactPage>
        );
    }
}

export default Contact;