import React, { useState } from 'react';
import axios from 'axios';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';
import MiddleDividers from '../../../Components/MiddleDividers/MiddleDividers';
import ProductService from '../../../Services/Product/ProductService';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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

    const [qtdProduto, setQtdProduto] = useState('');
    const [estoque, setEstoque] = useState('');
    const [estoqueMin, setEstoqueMin] = useState('');
    const [estoqueMax, setEstoqueMax] = useState('');
    const [precoCompra, setPrecoCompra] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');

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

    function addCarrinho() {
        axios.post(`http://localhost:8080/empresas/adicionar-carrinho/${productId}/${empresa?.cnpj}/${qtdProduto}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Produto adicionado ao carrinho com sucesso!', 'sucess')
                }
            }).catch((err) => {
                notify('Estoque insuficiente!', 'error')
            });
    }

    async function putProduct() {
        const service = new ProductService()
        if (await service.putProduct({
            "estoque": estoque,
            "estoqueMin": estoqueMin,
            "estoqueMax": estoqueMax,
            "precoCompra": precoCompra,
            "precoVenda": precoVenda
        }, empresa?.idEmpresa, productId)) {
            navigate(-1)
        }
    }

    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Produto</h1>
                </Grid>

                <Grid item xs={12}>
                    <MiddleDividers />
                </Grid>

                <Grid item xs={12}>
                    <h2>Estoque</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Estoque" variant="outlined" onChange={(evt) => setEstoque(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Estoque Mínimo" variant="outlined" onChange={(evt) => setEstoqueMin(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Estoque Máximo" variant="outlined" onChange={(evt) => setEstoqueMax(evt.target.value)} />
                </Grid>


                <Grid item xs={12}>
                    <h2>Preços</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Preço de compra" variant="outlined" onChange={(evt) => setPrecoCompra(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Preço de venda" variant="outlined" onChange={(evt) => setPrecoVenda(evt.target.value)} />
                </Grid>

                <Grid item xs={12}>
                    <MiddleDividers />
                </Grid>

                <Grid item xs={12}>
                    <h2>Venda</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Quantidade a vender" variant="outlined" onChange={(evt) => setQtdProduto(evt.target.value)} />
                </Grid>

                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={2.5}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => {
                                putProduct()
                            }}
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
                            variant="contained"
                            onClick={() => { addCarrinho() }}
                            startIcon={<AddShoppingCartIcon />}
                        >
                            Adicionar ao Carrinho
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={2.5}>
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