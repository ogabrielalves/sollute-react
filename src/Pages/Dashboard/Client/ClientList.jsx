import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from "../../../Context/AuthContext";
import ClientService from '../../../Services/Client/ClientService';
const service = new ClientService();

function ClientList(props) {
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
        field: "idCliente",
        headerName: "ID do Cliente",
        width: 290
    },
    {
        field: "nomeCliente",
        headerName: "Nome do cliente",
        width: 290
    },
    {
        field: "telefone",
        headerName: "Telefone do cliente",
        width: 200
    }

];

export default ClientList;