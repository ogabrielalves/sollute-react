import { React, useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAuth from '../../../Hooks/useAuth';
import ProviderService from '../../../Services/Provider/ProviderService';

const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function NewProvider() {
    const navigate = useNavigate();

    const { empresa } = useAuth();

    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [idFornecedor, setIdFornecedor] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [qtdFornecida, setQtdFornecida] = useState('');
    
   async function PostProvider() {

        const service = new ProviderService()
        if(await service.postFuncionarios({
            "fkEmpresa": empresa?.idEmpresa,
            "IdFornecedor": idFornecedor,
            "nomeFornecedor": nomeFornecedor,
            "telefone": telefone,
            "nomeProduto": nomeProduto,
            "qtdFornecida": qtdFornecida
        },  empresa?.idEmpresa)){
            navigate(-1)
        }
    }
    
    return (
        <Dashboard>
            <form onSubmit={(evt) => {
                evt.preventDefault();
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LocalOfferIcon style={{ marginRight: '20px' }} />
                        <h1>Novo Fornecedor</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Dados Gerais</h2>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Nome do fornecedor" variant="outlined" onChange={(evt) => setNomeFornecedor(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Id do fornecedor" variant="outlined" onChange={(evt) => setIdFornecedor(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Telefone do fornecedor" variant="outlined" onChange={(evt) => setTelefone(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Nome do produto" variant="outlined" onChange={(evt) => setNomeProduto(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required fullWidth id="outlined-basic" label="Quantidade fonecida" variant="outlined" onChange={(evt) => setQtdFornecida(evt.target.value)} />
                    </Grid>                    

                    <Grid container spacing={3} sx={styleGridButton}>
                        <Grid item xs={12} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<CheckCircleIcon />}
                                onClick={() => {
                                    PostProvider()
                                }}
                            >
                                Criar Fornecedor
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button
                                type='submit'
                                fullWidth
                                variant="outlined"
                                startIcon={<ArrowBackIcon />}
                                onClick={() => navigate('/dashboard/provider')}
                            >
                                Voltar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Dashboard>
    );
    
   
  
}

export default NewProvider;