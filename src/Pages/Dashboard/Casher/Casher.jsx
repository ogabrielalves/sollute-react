import { React, useState } from 'react';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import { notify } from '../../../Components/Notify/Notify';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import {
    TextField, Grid, Button, FormControl, OutlinedInput, InputLabel,
    InputAdornment
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';
import ListCasher from '../../../Components/ListCasher/ListCasher';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Casher() {

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [values, setValues] = useState({
        amount: ''
    });

    const navigate = useNavigate();

    const { empresa } = useAuth();

    const [valorEntrada, setValorEntrada] = useState('');
    const [valorSaida, setValorSaida] = useState('');
    const [valorAtual, setValorAtual] = useState('');

    function addValue() {
        axios.put(`http://localhost:8080/empresas/adicionar-valor-caixa/${empresa?.idEmpresa}/${valorEntrada}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Valor adicionado com sucesso!', 'sucess')
                    setValorAtual(res.data)
                }
            }).catch((err) => {
                notify('Erro ao adicionar o valor!', 'error')
            });
    }

    function removeValue() {
        axios.put(`http://localhost:8080/empresas/remover-valor-caixa/${empresa?.idEmpresa}/${valorSaida}`)
            .then((res) => {
                if (res.status === 200) {
                    notify('Valor removido com sucesso!', 'sucess')
                    setValorAtual(res.data)
                }
            }).catch((err) => {
                notify('Erro ao remover o valor!', 'error')
            });
    }

    return (<>
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LocalOfferIcon style={{ marginRight: '20px' }} />
                    <h1>$ Caixa</h1>
                </Grid>
                <Grid item xs={12} md={2}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount" >Valor</InputLabel>
                        <OutlinedInput
                            disabled
                            id="outlined-adornment-amount"
                            value={valorAtual}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField fullWidth id="outlined-basic" label="Valor Entrada" variant="outlined" onChange={(evt) => setValorEntrada(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={5}>
                    <TextField fullWidth id="outlined-basic" label="Valor Saida" variant="outlined" onChange={(evt) => setValorSaida(evt.target.value)} />
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                        onClick={() => navigate('/dashboard/new-casher')}

                    >
                        Confirmar venda
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                        onClick={() => { addValue() }}

                    >
                        Adicionar Valor
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<SearchIcon />}
                        onClick={() => { removeValue() }}

                    >
                        Remover Valor
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <ListCasher />
                </Grid>



            </Grid>


        </Dashboard>
    </>);
}

export default Casher;