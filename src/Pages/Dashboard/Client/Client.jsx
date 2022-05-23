import React from 'react';
import { TextField, Grid, Button } from '@mui/material';
import Dashboard from '../../../Components/Dashboard/Dashboard';


import ClientList from './ClientList';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


function Client() {

    const navigate = useNavigate();

    return ( <>
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Clientes</h1>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Nome do cliente" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do cliente " variant="outlined" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => window.location.href = "/dashboard/new-client"}
                    >
                        Novo Cliente
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                    >
                        Pesquisar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <ClientList />
                </Grid>
            </Grid>
        </Dashboard>
    </>);
}

export default Client;