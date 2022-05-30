import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CasherService from '../../../Services/Casher/CasherService';
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

const service = new CasherService()

function CashierList(props) {

    const navigate = useNavigate();

    const { empresa } = useContext(AuthContext)

    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {

        if (!empresa) return null;
        console.log(empresa)
        getData()
        async function getData() {
            const apiResponse = await service.getCashierList(empresa?.idEmpresa)
            console.log(apiResponse)
            setItems(apiResponse)
        }

    }, [empresa, props])

    return (
        <DataGrid
            sortable={true}
            filter={true}
            density="compact"
            autoWidth={true}
            rowHeight={70}
            columns={columns}
            getRowId={(row) => row.codigo}
            onCellClick={(params) => {
                console.log(params.row)
                navigate(`/dashboard/edit-casher/${params.row.codigo}`)
            }}
            rows={items}
            page={page}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onPageChange={(newPage) => setPage(newPage)}

            rowsPerPageOptions={[10, 20, 30]}
            autoHeight={true}
        />
    )
}

const columns = [
    {
        field: "codigo",
        headerName: "Código do Produto",
        width: 290
    },
    {
        field: "nome",
        headerName: "Nome do Produto",
        width: 290
    },
    {
        field: "marca",
        headerName: "Marca do Produto",
        width: 290
    },
    {
        field: "qtdVenda",
        headerName: "Quantidade",
        width: 290
    },
    {
        field: "valorVenda",
        headerName: "Valor dos Produtos",
        width: 200
    }
];

export default CashierList;