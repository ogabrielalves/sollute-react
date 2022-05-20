import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from "../../../Context/AuthContext";
import ProviderService from '../../../Services/Provider/ProviderService';
const service = new ProviderService();

function ProviderList(props) {
    const { empresa } = useContext(AuthContext)

    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {

        if (!empresa) return null;

        getData()
        async function getData() {
            const apiResponse = await service.getProdutos(empresa?.idEmpresa)
            console.log(apiResponse)
            setItems(apiResponse)
        }
    }, [empresa])

    return (
        <DataGrid
            sortable={true}
            filter={true}
            density="compact"
            autoWidth={true}
            rowHeight={70}
            columns={columns}
            getRowId={(row) => row.codigo}
            rows={items}
            page={page}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            onPageChange={(newPage) => setPage(newPage)}

            rowsPerPageOptions={[10, 20, 30]}
            autoHeight={true} >
        </DataGrid>
    )
}

const columns = [
    {
        field: "idFornecedor",
        headerName: "ID do fornecedor",
        width: 290
    },
    {
        field: "nomeFornecedor",
        headerName: "Nome do fornecedor",
        width: 290
    },
    {
        field: "telefone",
        headerName: "Telefone do fornecedor",
        width: 200
    },
    {
        field: "nomeProduto",
        headerName: "Nome do produto",
        width: 220
    },
    {
        field: "qtdFornecida",
        headerName: "Quantidade fornecida",
        width: 220
    }

];

export default ProviderList;