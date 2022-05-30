import React, {useContext, useEffect, useState} from 'react';
import Chart from 'chart.js/auto';
import SalesReportService from "../../../Services/SalesReport/SalesReportService";
import {AuthContext} from "../../../Context/AuthContext";
import {Bar} from "react-chartjs-2";

function Top5ProdutosMaisVendidos() {
    const service = new SalesReportService();
    const {empresa} = useContext(AuthContext);
    const [dados, setDados] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {

        if (!empresa) return null;

        getData()

        async function getData() {
            let produtos = await service.getTop5ProdutosVendidos(empresa?.idEmpresa);
            let qtdVendidos = produtos.map(p => p.qtdVendidos);
            let nomes = produtos.map(p => p.nome);
            setDados(qtdVendidos);
            setLabels(nomes);
        }
    }, [empresa])


    const data = {
        labels,
        datasets: [{
            data: [...dados],
            backgroundColor: [
                '#e3d212', '#c3c5c7', '#CD7F32', '#808080', '#808080'
            ],
            borderColor: [
                '#000',
                '#999',
                '#ccc'
            ],
            borderWidth: 1
        }]
    };

    return <Bar data={data}/>;

}

export default Top5ProdutosMaisVendidos;