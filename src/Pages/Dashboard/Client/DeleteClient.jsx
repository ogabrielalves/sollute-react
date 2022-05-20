import React, { useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import axios from 'axios';

import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

function DeleteClient() {
    const { empresa } = useAuth();

    const navigate = useNavigate();

    const center = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const [id, setId] = useState('');

    function deleteClient(codigo) {
        axios.delete(`http://localhost:8080/empresas/deletar-cliente/${codigo}/${empresa?.idEmpresa}`);
    }

    return (
        <Dashboard>
            <form action="">
                <Grid container spacing={2} sx={center}>
                    <Grid item xs={12} marginBottom={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <DeleteIcon style={{ marginRight: '20px' }} />
                        <h1>Excluir Cliente</h1>
                    </Grid>
                    <Grid item xs={12} md={8} marginBottom={2}>
                        <TextField fullWidth id="outlined-basic" label="ID do Cliente" variant="outlined"
                            onChange={(evt) => setId(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12} md={4}>
                        <Button
                            onClick={() => {
                                deleteClient(id)                                
                            }}
                            fullWidth
                            variant="contained"
                            startIcon={<DeleteIcon />}
                        >
                            Excluir
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => navigate("/dashboard/client")}
                            startIcon={<ArrowBackIcon />}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Dashboard>
    );
}

export default DeleteClient;