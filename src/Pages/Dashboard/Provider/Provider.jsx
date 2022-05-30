import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid, Button } from '@mui/material';
import Dashboard from '../../../Components/Dashboard/Dashboard';

import ProviderList from './ProviderList';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

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
                    <SupervisedUserCircleIcon style={{ marginRight: '20px' }} />
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
                <Grid item xs={12} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => navigate("/dashboard/new-provider")}
                    >
                        Novo fornecedor
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
                    <ProviderList />
                </Grid>
            </Grid>
        </Dashboard>
    </>);
}

export default Provider;