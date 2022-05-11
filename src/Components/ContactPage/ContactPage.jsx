import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Styles
const leftBar = {
    backgroundColor: '#3E00FF',
    height: '100vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
}

const rightScreen = {
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const styleButton = {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 5
}

function ContactPage(props) {

    const matches = useMediaQuery('(max-width:1325px)');

    function screenFit() {
        var styleAlign = null;
        if (matches) {
            styleAlign = {
                margin: '15px 0 0 40px'
            }
        }
        else {
            styleAlign = {
                margin: '80px 0 0 80px'
            }
        }
        return styleAlign;
    }

    return (
        <Grid container>
            <Grid item xs={3} sx={leftBar}>
                <Grid>
                    <Grid style={screenFit()}>
                        <h2>Entre em contato</h2>
                        <Grid style={{ width: '70%', marginTop: '20px' }}>
                            <p>Nossa equipe é amigável e está sempre aqui para conversar.</p>
                        </Grid>

                        <Grid mb={5}>
                            <Grid style={{ display: 'flex', marginTop: '20px' }}>
                                <EmailOutlinedIcon style={{ marginRight: '20px' }} />
                                <h3>Converse conosco</h3>
                            </Grid>
                            <Grid style={{ marginLeft: '45px', marginTop: '10px', width: '50%' }} >
                                <p style={{ marginBottom: '10px' }}>Nossa equipe está aqui para ajudar.</p>
                                <b>Sollute@gmail.com</b>
                            </Grid>
                        </Grid>

                        <Grid mb={5}>
                            <Grid style={{ display: 'flex', marginTop: '20px' }}>
                                <LocationOnOutlinedIcon style={{ marginRight: '20px' }} />
                                <h3>Escritório</h3>
                            </Grid>
                            <Grid style={{ marginLeft: '45px', marginTop: '10px', width: '50%' }} >
                                <p style={{ marginBottom: '10px' }}>Venha dizer um oi aqui no nosso escritório.</p>
                                <b>Rua Haddock Lobo, 595 - Cerqueira César, São Paulo.</b>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Grid style={{ display: 'flex', marginTop: '20px' }}>
                                <LocalPhoneOutlinedIcon style={{ marginRight: '20px' }} />
                                <h3>Telefone</h3>
                            </Grid>
                            <Grid style={{ marginLeft: '45px', marginTop: '10px', width: '50%' }} >
                                <p style={{ marginBottom: '10px' }}>Seg a Sex das 8h às 17h.</p>
                                <b>(11) 1234-5678</b>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button
                            onClick={() => window.location.href = "/"}
                            sx={styleButton}
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            size="large">
                            Voltar ao inicio
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={9} sx={rightScreen}>
                {props.children}
            </Grid>
        </Grid>
    );
}
export default ContactPage;