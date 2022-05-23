import React from 'react';
import axios from 'axios';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function EditProduct() {

    const { productId } = useParams();

    const navigate = useNavigate();

    const { empresa } = useAuth();

    function deleteProduto() {
        axios.delete(`http://localhost:8080/empresas/deletar-produto/${productId}/${empresa?.idEmpresa}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Produto deletado com sucesso!', 'sucess')
                }

            }).catch((err) => {
                notify('Produto não encontrado!', 'error')
            });
    }

    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Produto</h1>
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
                            variant="contained"
                            onClick={() => { deleteProduto() }}
                            startIcon={<DeleteIcon />}
                        >
                            Excluir
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate("/dashboard/product")}
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