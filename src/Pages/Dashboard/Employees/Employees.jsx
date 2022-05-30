import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmployeesList from './EmployeesList';
import PersonIcon from '@mui/icons-material/Person';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Employees() {

    const navigate = useNavigate();

    return (<>
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PersonIcon style={{ marginRight: '20px' }} />
                    <h1>Funcionarios</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Nome do funcionario" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="CPF do funcionario" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => navigate("/dashboard/new-employee")}
                    >
                        Novo Funcionario
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                    >
                        Pesquisar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <EmployeesList />
                </Grid>

            </Grid>


        </Dashboard>
    </>);
}

export default Employees;