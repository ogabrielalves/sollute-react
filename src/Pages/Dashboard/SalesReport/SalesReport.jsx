import React, {useState} from 'react';
import Dashboard from "../../../Components/Dashboard/Dashboard";
import {Backdrop, CircularProgress, Grid} from "@mui/material";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import faker from "faker";

function SalesReport() {

    const [loading, setLoading] = useState(true);

    const carregar = () => {
        setLoading(false);
    }
    setTimeout(carregar, 3000);

    const labels = ['Bruto', 'Líquido'];

    const data = {
        labels,
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20]
        }]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data2 = {
        labels: labels2,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Dataset 3',
                data: labels.map(() => faker.datatype.number({min: -1000, max: 1000})),
                backgroundColor: 'rgb(53, 162, 235)',
            },
        ],
    };

    return (
        <Dashboard>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
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
                        <Bar data={data}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container style={{alignItems: 'center', justifyContent: 'center'}}>
                            <h4>Lucro Bruto x Líquido</h4>
                        </Grid>
                        <Bar data={data}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12}>
                        <Grid container style={{alignItems: 'center', justifyContent: 'center'}}>
                            <h4>Lucro por Produto</h4>
                        </Grid>
                        <Bar data={data2} options={options}/>
                    </Grid>
                </Grid>
            </>}
        </Dashboard>

    )
}

export default SalesReport;