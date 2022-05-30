import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

function EditCasher() {

    const navigate = useNavigate();
    

    const { empresa } = useAuth();
    const { codigo } = useParams();
    
    console.log(codigo)

    const [qtdProduto, setQtdProduto] = useState('');

    function deleteProduto() {
        axios.delete(`http://localhost:8080/empresas/carrinho-apagar-produto/${codigo}/${empresa?.idEmpresa}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Produto deletado com sucesso!', 'sucess')
                }
            }).catch((err) => {
                notify('Produto não encontrado!', 'error')
            });
    }

    function atualizarCarrinho() {
        axios.put(`http://localhost:8080/empresas/atualizar-carrinho/${codigo}/${empresa?.idEmpresa}/${qtdProduto}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Quantidade atualiza com sucesso!', 'sucess')
                }
            }).catch((err) => {
                notify('Estoque insuficiente!', 'error')
            });
    }

    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShoppingCartIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Produto do Carrinho</h1>
                </Grid>

                <Grid item xs={12}>
                    <h2>Venda</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nova quantidade" variant="outlined" onChange={(evt) => setQtdProduto(evt.target.value)} />
                </Grid>

                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={2.5}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => { atualizarCarrinho() }}
                        >
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={2.5}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => { deleteProduto() }}
                            startIcon={<DeleteIcon />}
                        >
                            Excluir
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={2.5}>
                        <Button
                            fullWidth
                            variant="outlined"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate("/dashboard/casher")}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dashboard>
    );
}

export default EditCasher;