import React from 'react';
import axios from 'axios';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}


function EditClient() {
    const { clientId } = useParams();

    const navigate = useNavigate();

    const { empresa } = useAuth();

    function deleteCliente() {
        axios.delete(`http://localhost:8080/empresas/deletar-cliente/${clientId}/${empresa?.id}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Cliente excluido com sucesso!', 'sucess')
                }

            }).catch((err) => {
                notify('Cliente não encontrado!', 'error')
            });
    }
    return (  
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Cliente</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>Dados Gerais</h2>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="ID do client" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome do cliente" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do cliente" variant="outlined" />
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