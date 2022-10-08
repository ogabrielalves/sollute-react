import { React, useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useAuth from '../../../Hooks/useAuth';
import EmployeesService from '../../../Services/Employee/EmployeesService';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function NewEmployee() {
    const navigate = useNavigate();

    const { empresa } = useAuth();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [salario, setSalario] = useState('');

    async function postEmployee() {
        const service = new EmployeesService()
        if (await service.postFuncionarios({            
            "nomeFuncionario": nome,
            "cpfFuncionario": cpf,
            "telefoneFuncionario": telefone,
            "salarioFuncionario": salario
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
                        <h1>Novo Funcionario</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h2>Dados Gerais</h2>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="Nome do funcionario" variant="outlined" onChange={(evt) => setNome(evt.target.value)} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="CPF do funcionario" variant="outlined" onChange={(evt) => setCpf(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="Telefone do funcionario" variant="outlined" onChange={(evt) => setTelefone(evt.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField required fullWidth id="outlined-basic" label="Salario do funcionario" variant="outlined" onChange={(evt) => setSalario(evt.target.value)} />
                    </Grid>

                    <Grid container spacing={3} sx={styleGridButton}>
                        <Grid item xs={12} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                startIcon={<CheckCircleIcon />}
                                onClick={() => {
                                    postEmployee()
                                }}
                            >
                                Criar funcionario
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button
                                type='submit'
                                fullWidth
                                variant="outlined"
                                startIcon={<ArrowBackIcon />}
                                onClick={() => navigate('/dashboard/employees')}
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

export default NewEmployee;