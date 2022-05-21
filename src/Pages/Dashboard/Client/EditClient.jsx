import { React, useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAuth from '../../../Hooks/useAuth';
import ClientService from '../../../Services/Client/ClientService';

const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function EditClient() {
    const navigate = useNavigate();

    const { empresa } = useAuth();

    const [telefone, setTelefone] = useState('');
    const [nomeCliente, setNome] = useState('');

    async function putClient() {
        const service = new ClientService()
        if (await service.putCliente({
            "nomeCliente": nomeCliente,
            "telefoneCliente": telefone
        }, empresa?.id)) {
            navigate(-1)
        }
    }

    return (
        <Dashboard>
            <form onSubmit={(evt) => {
                evt.preventDefault();
            }}></form>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Cliente</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>Dados Gerais</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="ID do client" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do cliente" variant="outlined" onChange={(evt) => setNome(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do cliente" variant="outlined" onChange={(evt) => setTelefone(evt.target.value)} />
                </Grid>

                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => {
                                putClient()
                            }}
                        >
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => window.location.href = "/dashboard/client"}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dashboard>

    );
}

export default EditClient;