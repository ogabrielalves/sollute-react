import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductList from './ProductList';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Product() {

    const navigate = useNavigate();

    return (
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Produtos</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do produto" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Código do produto " variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Marca do produto" variant="outlined" />
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
                <Grid item xs={12} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => navigate("/dashboard/new-product")}
                    >
                        Novo Produto
                    </Button>
                </Grid>              
                <Grid item xs={12}>
                    <ProductList />
                </Grid>
            </Grid>
        </Dashboard>
    );
}

export default Product;