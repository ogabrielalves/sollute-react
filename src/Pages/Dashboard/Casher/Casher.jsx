import axios from 'axios';
import { React, useState, useEffect } from 'react';
import CashierList from './CashierList';
import useAuth from '../../../Hooks/useAuth';
import { notify } from '../../../Components/Notify/Notify';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import {
    TextField,
    Grid,
    Button,
    FormControl,
    OutlinedInput,
    InputLabel,
    InputAdornment
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PaidIcon from '@mui/icons-material/Paid';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CasherService from '../../../Services/Casher/CasherService';

const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const service = new CasherService();

function Casher() {

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [values, setValues] = useState({
        amount: ''
    });

    const { empresa } = useAuth();

    const [valorEntrada, setValorEntrada] = useState('');
    const [valorSaida, setValorSaida] = useState('');
    const [valorAtual, setValorAtual] = useState('');
    const [contador, setContador] = useState(0)

    useEffect(() => {

        if (!empresa) return null;
        getValue();

    }, [empresa])

    function getValue() {
        axios.get(`http://localhost:8080/caixa/pegar-saldo/${empresa?.idEmpresa}`)
            .then((res) => {
                if (res.status === 200) {
                    setValorAtual(res.data)
                }
            })
    }

    function addValue() {
        if (valorEntrada === 0) {
            return notify('Insira um valor válido!', 'error')
        } else {
            axios.put(`http://localhost:8080/caixa/adicionar-valor-caixa/${empresa?.idEmpresa}/${valorEntrada}`)
                .then((res) => {
                    if (res.status === 200) {
                        notify('Valor creditado com sucesso!', 'sucess')
                        getValue();
                        setValorAtual(res.data)
                    }
                }).catch((err) => {
                    notify('Valor inválido!', 'error')
                });
        }
    }

    function removeValue() {
        if (valorSaida === 0) {
            return notify('Insira um valor válido!', 'error')
        } else {
            axios.put(`http://localhost:8080/caixa/remover-valor-caixa/${empresa?.idEmpresa}/${valorSaida}`)
                .then((res) => {
                    if (res.status === 200) {
                        notify('Valor debitado com sucesso!', 'sucess')
                        getValue();
                        setValorAtual(res.data)
                    }
                }).catch((err) => {
                    notify('Saldo insuficiente!', 'error')
                });
        }
    }

    return (<>
        <Dashboard>
            <Grid container spacing={3} sx={center}>
                <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PointOfSaleIcon style={{ marginRight: '20px' }} />
                    <h1>Caixa</h1>
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
                        startIcon={<PaidIcon />}
                        onClick={() => service.sellCashier(empresa?.idEmpresa)
                            .then(() => {
                                getValue()
                                setContador(contador + 1)
                            })
                        }
                    >
                        Confirmar venda
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => { addValue() }}

                    >
                        Adicionar Valor
                    </Button>
                </Grid>
                <Grid item xs={12} md={3}>

                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<RemoveIcon />}
                        onClick={() => { removeValue() }}

                    >
                        Remover Valor
                    </Button>
                </Grid>

                <Grid item xs={12}>
                    <CashierList contador={contador} />
                </Grid>

            </Grid>

        </Dashboard>
    </>);
}

export default Casher;