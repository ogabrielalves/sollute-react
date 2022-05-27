import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function Configuration() {
    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SettingsIcon style={{ marginRight: '20px' }} />
                    <h1>Configurações</h1>
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Nome da empresa" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="CNPJ" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Senha" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Repetir a senha" variant="outlined" />
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
                </Grid>

            </Grid>
        </Dashboard>
    );
}

export default Configuration;