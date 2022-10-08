import { React, useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAuth from '../../../Hooks/useAuth';
import CasherService from '../../../Services/Casher/CasherService';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function NewCasher() {
    const navigate = useNavigate();

    const { empresa } = useAuth();

    const [valor, setValor] = useState('');
    const [qtdEntradas, setQtdEntradas] = useState('');
    const [qtdSaidas, setQtdSaidas] = useState('');
    const [valorEntradas, setValorEntradas] = useState('');
    const [valorSaidas, setValorSaidas] = useState('');

    async function postCasher() {
        const service = new CasherService();
        if (await service.postCaixa({            
            "valor": valor,
            "qtdEntradas": qtdEntradas,
            "qtdSaidas": qtdSaidas,
            "valorEntradas": valorEntradas,
            "valorSaidas": valorSaidas
        }, empresa?.id)) {
            navigate(-1)
        }
    }

    return (
        <Dashboard>
            <form onSubmit={(evt) => {
                evt.preventDefault();
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LocalOfferIcon style={{ marginRight: '20px' }} />
                        <h1>$ Nova Compra</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Dados Gerais</h2>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Valor" variant="outlined" onChange={(evt) => setValor(evt.target.value)} />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Quantidade Entradas" variant="outlined" onChange={(evt) => setQtdEntradas(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Quantidade Saidas" variant="outlined" onChange={(evt) => setQtdSaidas(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Valor Entradas" variant="outlined" onChange={(evt) => setValorEntradas(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Valor Saidas" variant="outlined" onChange={(evt) => setValorSaidas(evt.target.value)} />
                    </Grid>

                    <Grid container spacing={3} sx={styleGridButton}>
                        <Grid item xs={12} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<CheckCircleIcon />}
                                onClick={() => {
                                    postCasher()
                                }}
                            >
                                Criar Valor
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button
                                type='submit'
                                fullWidth
                                variant="outlined"
                                startIcon={<ArrowBackIcon />}
                                onClick={() => navigate('/dashboard/casher')}
                            >
                                Voltar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Dashboard>
    );



}

export default NewCasher;
