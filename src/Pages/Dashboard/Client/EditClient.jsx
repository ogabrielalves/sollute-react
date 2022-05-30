import axios from 'axios';
import { React, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import ClientService from '../../../Services/Client/ClientService';

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

function EditClient() {
    const navigate = useNavigate();

    const { clientId } = useParams();
    const { empresa } = useAuth();

    const [telefone, setTelefone] = useState('');
    const [nomeCliente, setNome] = useState('');

    function deleteCliente() {
        axios.delete(`http://localhost:8080/empresas/deletar-cliente/${clientId}/${empresa?.idEmpresa}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Cliente excluido com sucesso!', 'sucess')
                }

            }).catch((err) => {
                notify('Cliente não encontrado!', 'error')
            });
    }

    async function putClient() {
        const service = new ClientService()
        if (await service.putCliente({
            "nomeCliente": nomeCliente,
            "telefoneCliente": telefone
        }, empresa?.idEmpresa, clientId)) {
            navigate(-1)
        }
    }

    return (
        <Dashboard>
            <form onSubmit={(evt) => {
                evt.preventDefault();
            }}></form>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Cliente</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>Dados Gerais</h2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Nome do cliente" variant="outlined" onChange={(evt) => setNome(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do cliente" variant="outlined" onChange={(evt) => setTelefone(evt.target.value)} />
                </Grid>

                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => {
                                putClient()
                            }}
                        >
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => { deleteCliente() }}
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
                            onClick={() => navigate("/dashboard/client")}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dashboard>
    );
}

export default EditClient;