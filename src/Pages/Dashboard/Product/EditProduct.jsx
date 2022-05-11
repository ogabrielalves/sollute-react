import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}


function EditProduct() {
    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Produto</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>Dados Gerais</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do produto" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Código do produto" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Marca do produto" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Categoria" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Peso" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Validade" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <h2>Estoque</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Estoque Inicial" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Estoque Mínimo" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Estoque Máximo" variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <h2>Preços</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Preço de compra" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Preço de venda" variant="outlined" />
                </Grid>


                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                        >
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => window.location.href = "/dashboard/product"}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dashboard>
    );
}

export default EditProduct;