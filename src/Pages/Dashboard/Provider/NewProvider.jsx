import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid, Button } from '@mui/material';
import Dashboard from '../../../Components/Dashboard/Dashboard';

import useAuth from '../../../Hooks/useAuth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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
    const [telefone, setTelefone] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [qtdFornecida, setQtdFornecida] = useState('');

    async function PostProvider() {

        const service = new ProviderService()
        if (await service.postFornecedores({
            "idFornecedor": 0,            
            "nomeFornecedor": nomeFornecedor,
            "telefoneFornecedor": telefone,
            "nomeProduto": nomeProduto,
            "qtd": qtdFornecida
        }, empresa?.idEmpresa)) {
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
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="Nome do fornecedor" variant="outlined" onChange={(evt) => setNomeFornecedor(evt.target.value)} />
                    </Grid>                    
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="Telefone do fornecedor" variant="outlined" onChange={(evt) => setTelefone(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="Nome do produto" variant="outlined" onChange={(evt) => setNomeProduto(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={6}>
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