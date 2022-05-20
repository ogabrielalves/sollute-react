import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';


import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ClientList from './ClientList';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


function Client() {
    return ( <>
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Clientes</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="ID do cliente " variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do cliente" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do cliente " variant="outlined" />
                </Grid>


                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => window.location.href = "/dashboard/new-client"}
                    >
                        Novo Cliente
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => window.location.href = "/dashboard/edit-client"}
                    >
                        Editar Cliente
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => window.location.href = "/dashboard/delete-client"}
                        endIcon={<DeleteIcon />}
                    >
                        Excluir Cliente
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