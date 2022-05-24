import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from "../../../Context/AuthContext";
import ProviderService from '../../../Services/Provider/ProviderService';
import { useNavigate } from 'react-router-dom';
const service = new ProviderService();

function ProviderList() {
    const navigate = useNavigate();

    const { empresa } = useContext(AuthContext)

    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {

        if (!empresa) return null;

        getData()
        async function getData() {
            const apiResponse = await service.getFornecedores(empresa?.idEmpresa)
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
            getRowId={(row) => row.idFornecedor}
            onCellClick={(params) => {
                console.log(params.row)
                navigate(`/dashboard/edit-provider/${params.row.idFornecedor}`)
            }}
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
        field: "nomeFornecedor",
        headerName: "Nome do Fornecedor",
        width: 390
    },
    {
        field: "telefoneFornecedor",
        headerName: "Telefone do Fornecedor",
        width: 300
    },
    {
        field: "nomeProduto",
        headerName: "Nome do Produto",
        width: 320
    },
    {
        field: "qtd",
        headerName: "Quantidade Fornecida",
        width: 320
    }

];

export default ProviderList;