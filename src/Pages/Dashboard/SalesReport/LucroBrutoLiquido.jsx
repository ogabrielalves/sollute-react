import React, {useContext, useEffect, useState} from 'react';
import Chart from 'chart.js/auto';
import SalesReportService from "../../../Services/SalesReport/SalesReportService";
import {AuthContext} from "../../../Context/AuthContext";
import {Bar} from "react-chartjs-2";

function LucroBrutoLiquido() {
    const service = new SalesReportService();
    const {empresa} = useContext(AuthContext);
    const [bruto, setBruto] = useState(null);
    const [liquido, setLiquido] = useState(null);

    useEffect(() => {

        if (!empresa) return null;

        getData()

        async function getData() {
            const apiResponseBruto = await service.getValorBruto(empresa?.idEmpresa);
            const apiResponseLiquido = await service.getValorLiquido(empresa?.idEmpresa);
            setBruto(apiResponseBruto);
            setLiquido(apiResponseLiquido);
        }
    }, [empresa])

    const labels = ['Bruto', 'Líquido'];

    const data = {
        labels,
        datasets: [{
            data: [bruto, liquido],
            backgroundColor: [
                '#42b3f5', '#f5426c'
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

export default LucroBrutoLiquido;