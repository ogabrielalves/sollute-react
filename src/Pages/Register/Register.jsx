import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import RegisterService from '../../Services/Register/RegisterService';

import RegisterPage from '../../Components/RegisterPage/RegisterPage';
import PopOver from '../../Components/PopOver/PopOver';

import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Register() {
    const matches = useMediaQuery('(max-width:1325px)');

    function screenFit(page) {
        var styleButtonBack = 0;
        switch (page) {
            case 1:
                if (matches) {
                    styleButtonBack = {
                        width: '30%',
                        marginRight: '5px'
                    }
                }
                else {
                    styleButtonBack = {
                        width: '30%',
                        marginRight: '25px'
                    }
                }
                break;

            case 2:
                if (matches) {
                    styleButtonBack = {
                        width: '35.5%'
                    }
                }
                else {
                    styleButtonBack = {
                        width: '34%'
                    }
                }
                break;

            default:
                break;
        }
        return styleButtonBack
    }

    // Usado para mudar a página
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);

    // Campos para o cadastro
    const [emailInput, setEmailInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');
    const [nomeFantasiaInput, setNomeFantasiaInput] = useState('');
    const [razaoSocialInput, setRazaoSocialInput] = useState('');
    const [cnpjInput, setCnpjInput] = useState('');
    const [cepInput, setCepInput] = useState('');
    const [ufInput, setUfInput] = useState('');
    const [cidadeInput, setCidadeInput] = useState('');
    const [logradouroInput, setLogradouroInput] = useState('');
    const [pontoRefInput, setPontoRefInput] = useState('');

    // States para
    const [errosCep, setErrosCep] = useState({ cep: { valido: true, texto: "" } });
    const [errosUf, setErrosUf] = useState({ uf: { valido: true, texto: "" } });
    const [errosCnpj, setErrosCnpj] = useState({ cnpj: { valido: true, texto: "" } });

    // Função para criação de usuário
    async function registerEmpresa() {
        const service = new RegisterService()
        await service.postEmpresa({
            "email": emailInput,
            "senha": senhaInput,
            "nomeFantasia": nomeFantasiaInput,
            "razaoSocial": razaoSocialInput,
            "cnpj": cnpjInput,
            "cep": cepInput,
            "uf": ufInput,
            "cidade": cidadeInput,
            "logradouro": logradouroInput,
            "pontoReferencia": pontoRefInput,
            "qtdProdutosVendidos": 0,
            "totalProdutosVendidos": 0,
            "autenticado": false
        })
    }

    return (
        <form onSubmit={(evt) => {
            evt.preventDefault();
        }}>
            {/* Step One */}
            {one &&
                <RegisterPage>
                    <Grid container spacing={1} >
                        <Grid item xs={12} mb={5}>
                            <h1>Insira seus dados</h1>
                            <p style={{ color: '#8E8E8E', width: '60%' }}>Coloque seu e-mail e senha, suas informações estarão seguras conosco.</p>
                        </Grid>
                        <Grid item xs={12} md={8} mb={2} >
                            <TextField
                                value={emailInput}
                                onChange={(evt) => { setEmailInput(evt.target.value) }}
                                fullWidth
                                id="email"
                                label="E-mail"
                                variant="outlined"
                                type={'email'} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                alue={senhaInput}
                                onChange={(evt) => { setSenhaInput(evt.target.value) }}
                                fullWidth
                                id="senha"
                                label="Senha"
                                variant="outlined"
                                type={'password'} />
                        </Grid>
                        <Grid item md={4}></Grid>
                        <Grid item md={4}></Grid>
                        <Grid item xs={12} md={4}>
                            <Button
                                fullWidth
                                variant="contained"
                                endIcon={<ArrowForwardIosIcon />}
                                onClick={() => {
                                    setTwo(true)
                                    setOne(false)
                                }}>
                                Próximo passo
                            </Button>
                        </Grid>
                    </Grid>
                </RegisterPage>
            }

            {/* Step Two */}
            {two &&
                <RegisterPage colorOne={'#26E07F'}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} mb={5}>
                            <h1>Insira as informações da sua empresa</h1>
                            <p style={{ color: '#8E8E8E', width: '60%' }}>Coloque mais informações sobre sua empresa, para saber de como devemos chama-la.</p>
                        </Grid>
                        <Grid item xs={12} md={8} mb={2} style={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                value={nomeFantasiaInput}
                                onChange={(evt) => { setNomeFantasiaInput(evt.target.value) }}
                                fullWidth
                                id="nomeFantasia"
                                label="Nome Fantasia"
                                variant="outlined" />
                            <PopOver>O nome fantasia é o nome da sua marca.</PopOver>
                        </Grid>
                        <Grid item xs={12} md={8} mb={2} style={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                value={razaoSocialInput}
                                onChange={(evt) => { setRazaoSocialInput(evt.target.value) }}
                                fullWidth
                                id="razaoSocial"
                                label="Razão Social"
                                variant="outlined" />
                            <PopOver>A razão social é o nome completo da Pessoa Física seguido do CPF do titular do MEI.</PopOver>
                        </Grid>
                        <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'center', marginBottom: 6 }}>
                            <TextField
                                value={cnpjInput}
                                onChange={(evt) => { setCnpjInput(evt.target.value) }}
                                onBlur={(evt) => {
                                    const ehValido = validarCNPJ(cnpjInput)
                                    setErrosCnpj({ cnpj: ehValido })
                                }}
                                error={!errosCnpj.cnpj.valido}
                                helperText={errosCnpj.cnpj.texto}
                                fullWidth
                                id="cnpj"
                                label="CNPJ"
                                variant="outlined" />
                            <PopOver>O número estará no seu CCMEI, o Certificado da Condição do Microempreendedor Individual.</PopOver>
                        </Grid>
                        <Grid item md={4}></Grid>
                        <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                            <Button
                                style={screenFit(1)}
                                variant="outlined"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => {
                                    setOne(true)
                                    setTwo(false)
                                }}>
                                Voltar
                            </Button>
                            <Button
                                style={{ width: '30%' }}
                                variant="contained"
                                endIcon={<ArrowForwardIosIcon />}
                                onClick={() => {
                                    setTwo(false)
                                    setThree(true)
                                }}>
                                Próximo passo
                            </Button>
                        </Grid>
                    </Grid>
                </RegisterPage>
            }

            {/* Step Three */}
            {three &&
                <RegisterPage colorOne={'#26E07F'} colorTwo={'#26E07F'}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} mb={5}>
                            <h1>Insira suas informações de endereço</h1>
                            <p style={{ color: '#8E8E8E', width: '60%' }}>Digite seu endereço para sabermos onde fica localizado sua empresa, apenas para fins comerciais.</p>
                        </Grid>
                        <Grid item xs={12} md={8} mb={2} >
                            <TextField
                                value={cepInput}
                                onChange={(evt) => { setCepInput(evt.target.value) }}
                                onBlur={(evt) => {
                                    const ehValido = validarCEP(cepInput)
                                    setErrosCep({ cep: ehValido })
                                }}
                                error={!errosCep.cep.valido}
                                helperText={errosCep.cep.texto}
                                fullWidth
                                id="cep"
                                label="CEP"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={12} md={1} mb={2}>
                            <TextField
                                value={ufInput}
                                onChange={(evt) => { setUfInput(evt.target.value) }}
                                onBlur={(evt) => {
                                    const ehValido = validarUF(ufInput)
                                    setErrosUf({ uf: ehValido })
                                }}
                                error={!errosUf.uf.valido}
                                helperText={errosUf.uf.texto}
                                fullWidth
                                id="uf"
                                label="UF"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={7} mb={2}>
                            <TextField
                                value={cidadeInput}
                                onChange={(evt) => { setCidadeInput(evt.target.value) }}
                                fullWidth
                                id="cidade"
                                label="Cidade"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={8} mb={2}>
                            <TextField
                                value={logradouroInput}
                                onChange={(evt) => { setLogradouroInput(evt.target.value) }}
                                fullWidth
                                id="logradouro"
                                label="Logradouro"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                value={pontoRefInput}
                                onChange={(evt) => { setPontoRefInput(evt.target.value) }}
                                fullWidth
                                id="pontoDeReferencia"
                                label="Ponto de refêrencia"
                                variant="outlined" />
                        </Grid>
                        <Grid item md={4}></Grid>
                        <Grid item md={4}></Grid>
                        <Grid item xs={12} md={12} style={{ display: 'flex' }}>
                            <Button
                                style={screenFit(1)}
                                variant="outlined"
                                startIcon={<ArrowBackIosIcon />}
                                onClick={() => {
                                    setTwo(true)
                                    setThree(false)
                                }}>
                                Voltar
                            </Button>
                            <Button
                                style={screenFit(2)}
                                variant="contained"
                                endIcon={<CheckIcon />}
                                onClick={() => {
                                    registerEmpresa()
                                }}
                                type='submit'>
                                Finalizar
                            </Button>
                        </Grid>
                    </Grid>
                </RegisterPage>
            }
        </form>
    );

    // Validações

    function validarCEP(cepInput) {
        if (cepInput.length !== 8) {
            return { valido: false, texto: "CEP deve ter 8 dígitos." }
        }
        else {
            return { valido: true, texto: "" }
        }
    }

    function validarUF(ufInput) {
        if (ufInput.length !== 2) {
            return { valido: false, texto: "UF deve ter 2 dígitos." }
        }
        else {
            return { valido: true, texto: "" }
        }
    }

    function validarCNPJ(cnpjInput) {
        if (cnpjInput.length !== 14) {
            return { valido: false, texto: "CNPJ deve ter 14 dígitos e sem traços e pontos." }
        }
        else {
            return { valido: true, texto: "" }
        }
    }

}

export default Register;