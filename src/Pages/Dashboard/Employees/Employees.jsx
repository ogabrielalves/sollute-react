import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmployeesList from './EmployeesList';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Employees() {
    return ( <>
       <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Funcionarios</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Nome do funcionario" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="CPF do funcionario" variant="outlined" />
                </Grid>
                                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => window.location.href = "/dashboard/new-employee"}
                    >
                        Novo Funcionario
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                    >
                        Pesquisar
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<EditIcon />}
                        onClick={() => window.location.href = "/dashboard/edit-employee"}
                    >
                        Editar Funcionario
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => window.location.href = "/dashboard/delete-employee"}
                        endIcon={<DeleteIcon />}
                    >
                        Excluir Funcionario
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <EmployeesList/>
                </Grid>
                
            </Grid>


        </Dashboard>
    </> );
}

export default Employees;