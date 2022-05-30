import axios from 'axios';
import { React, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import ProviderService from '../../../Services/Provider/ProviderService';

import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function EditProvider() {
    const navigate = useNavigate();

    const { providerId } = useParams();
    const { empresa } = useAuth();

    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [qtdFornecida, setQtdFornecida] = useState('');

    function deleteFornecedor() {
        axios.delete(`http://localhost:8080/empresas/deletar-fornecedor/${providerId}/${empresa?.idEmpresa}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Fornecedor excluido com sucesso!', 'sucess')
                }

            }).catch((err) => {
                notify('Não foi possivel excluir o fornecedor.', 'error')
            });
    }

    async function putProvider() {
        const service = new ProviderService()
        if (await service.putProvider({
            "nomeFornecedor": nomeFornecedor,
            "telefoneFornecedor": telefone,
            "nomeProduto": nomeProduto,
            "qtdFornecida": qtdFornecida
        }, empresa?.idEmpresa, providerId)) {
            navigate(-1)
        }
    }

    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Fornecedores</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>Dados Gerais</h2>
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField fullWidth id="outlined-basic" label="Nome do Fornecedor" variant="outlined" onChange={(evt) => setNomeFornecedor(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do Fornecedor" variant="outlined" onChange={(evt) => setTelefone(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField fullWidth id="outlined-basic" label="Nome do produto" variant="outlined" onChange={(evt) => setNomeProduto(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField fullWidth id="outlined-basic" label="Quantidade do fornecida" variant="outlined" onChange={(evt) => setQtdFornecida(evt.target.value)} />
                </Grid>

                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => {
                                putProvider()
                            }}
                        >
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => { deleteFornecedor() }}
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
                            onClick={() => navigate("/dashboard/provider")}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dashboard>
    );
}

export default EditProvider;