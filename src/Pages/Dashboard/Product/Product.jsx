import React, {useRef, useState} from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import {TextField, Grid, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ProductService from '../../../Services/Product/ProductService';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ProductList from './ProductList';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import useAuth from "../../../Hooks/useAuth";

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}


function Product() {

    const service = new ProductService();
    const navigate = useNavigate();
    const {empresa} = useAuth();
    const fileInput = useRef(null);


    function enviarArquivo(event) {
        const file = event.target.files[0]
        const form = new FormData();
        form.append("file", file)
        service.patchUpload(form, empresa?.cnpj)
    }

    function manipularUpload() {
        fileInput.current.click()
    }

    return (
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <LocalOfferIcon style={{marginRight: '20px'}}/>
                    <h1>Produtos</h1>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do produto" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Código do produto " variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Marca do produto" variant="outlined"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon/>}
                    >
                        Pesquisar
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon/>}
                        onClick={() => navigate("/dashboard/new-product")}
                    >
                        Novo Produto
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<DownloadIcon/>}
                        onClick={() => service.getCsv(1)}
                    >
                        Exportar para CSV
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <input onChange={enviarArquivo} type={"file"} hidden name={"file"} ref={fileInput} accept={".txt"}/>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<UploadIcon/>}
                        onClick={manipularUpload}
                    >
                        Importar TXT
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <ProductList/>
                </Grid>
            </Grid>
        </Dashboard>
    );
}

export default Product;