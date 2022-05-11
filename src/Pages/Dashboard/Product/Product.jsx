import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductList from './ProductList';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Product() {
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
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                    >
                        Pesquisar
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => window.location.href = "/dashboard/new-product"}
                    >
                        Novo Produto
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => window.location.href = "/dashboard/edit-product"}
                    >
                        Editar Produto
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => window.location.href = "/dashboard/delete-product"}
                        endIcon={<DeleteIcon />}
                    >
                        Excluir Produto
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <ProductList />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Adicionar ao carrinho
                    </Button>
                </Grid>
            </Grid>


        </Dashboard>
    );
}

export default Product;