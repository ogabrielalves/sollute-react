import React, {useContext, useEffect, useState} from 'react';
import Dashboard from "../../../Components/Dashboard/Dashboard";
import {Backdrop, CircularProgress, Grid} from "@mui/material";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import faker from "faker";
import {AuthContext} from "../../../Context/AuthContext";
import SalesReportService from "../../../Services/SalesReport/SalesReportService";
import LucroBrutoLiquido from "./LucroBrutoLiquido";
import Top5ProdutosMaisVendidos from "./Top5ProdutosMaisVendidos";


function SalesReport() {

    const [loading, setLoading] = useState(true);

    const carregar = () => {
        setLoading(false);
    }
    setTimeout(carregar, 3000);

    return (
        <Dashboard>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            {!loading && <>
                <Grid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <EqualizerIcon style={{marginRight: '20px'}}/>
                    <h1>Relatório de Vendas</h1>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Grid container style={{alignItems: 'center', justifyContent: 'center'}}>
                            <h4>Lucro Bruto x Líquido</h4>
                        </Grid>
                        <LucroBrutoLiquido/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12}>
                        <Grid container style={{alignItems: 'center', justifyContent: 'center'}}>
                            <h4>Top 5 Produtos Mais Vendidos</h4>
                        </Grid>
                        <Top5ProdutosMaisVendidos/>
                    </Grid>
                </Grid>
            </>}
        </Dashboard>

    )
}

export default SalesReport;