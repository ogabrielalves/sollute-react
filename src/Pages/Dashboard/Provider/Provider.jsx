import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProviderList from './ProviderList';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Provider() {

    const navigate = useNavigate();

    return (<>
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Fornecedores</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do fornecedor" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do fornecedor " variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do produto" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => navigate("/dashboard/new-provider")}
                    >
                        Novo fornecedor
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => navigate("/dashboard/edit-provider")}
                    >
                        Editar Fornecedor
                    </Button>
                </Grid>             

                <Grid item xs={12}>
                    <ProviderList />
                </Grid>
            </Grid>


        </Dashboard>
    </>);
}

export default Provider;