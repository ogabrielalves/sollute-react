import axios from 'axios';
import { React, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { TextField, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { notify } from '../../../Components/Notify/Notify';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import EmployeesService from '../../../Services/Employee/EmployeesService';

import DeleteIcon from '@mui/icons-material/Delete';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Style
const styleGridButton = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px'
}

function EditEmployee() {
    const navigate = useNavigate();

    const { emplyoeeId } = useParams();

    const { empresa } = useAuth();

    const [nomeFuncionario, setNome] = useState('');
    const [telefoneFuncionario, setTelefoneFuncionario] = useState('');
    const [cpfFuncionario, setCpfFuncionario] = useState('');
    const [salario, setSalario] = useState('');

    function deleteEmployee() {
        axios.delete(`http://localhost:8080/empresas/deletar-funcionario/${emplyoeeId}/${empresa?.idEmpresa}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Funcionario excluido com sucesso!', 'sucess')
                }

            }).catch((err) => {
                notify('Funcionario não encontrado!', 'error')
            });
    }

    async function putEmployee() {
        const service = new EmployeesService()
        if (await service.putEmployee({
            "nomeFuncionario": nomeFuncionario,
            "cpfFuncionario": cpfFuncionario,
            "telefoneFuncionario": telefoneFuncionario,
            "salario": salario
        }, empresa?.idEmpresa, emplyoeeId)) {
            navigate(-1)
        }
    }

    return (
        <Dashboard>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>Editar Funcionario</h1>
                </Grid>
                <Grid item xs={12}>
                    <h2>Dados Gerais</h2>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Nome do funcionario" variant="outlined" onChange={(evt) => setNome(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="CPF do funcionario" variant="outlined" onChange={(evt) => setCpfFuncionario(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Telefone do funcionario" variant="outlined" onChange={(evt) => setTelefoneFuncionario(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth id="outlined-basic" label="Salario do Funcionario" variant="outlined" onChange={(evt) => setSalario(evt.target.value)} />
                </Grid>

                <Grid container spacing={3} sx={styleGridButton}>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<CheckCircleIcon />}
                            onClick={() => {
                                putEmployee()
                            }}
                        >
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => { deleteEmployee() }}
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
                            onClick={() => navigate("/dashboard/employees")}
                        >
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dashboard>

    );
}

export default EditEmployee;