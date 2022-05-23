import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { AuthContext } from "../../../Context/AuthContext";
import ClientService from '../../../Services/Client/ClientService';
import { useNavigate } from 'react-router-dom';
const service = new ClientService();

function ClientList() {
    const navigate = useNavigate();

    const { empresa } = useContext(AuthContext)

    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {

        if (!empresa) return null;

        getData()
        async function getData() {
            const apiResponse = await service.getCliente(empresa?.idEmpresa)
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
            getRowId={(row) => row.idCliente}
            onCellClick={(params) => {
                console.log(params.row)
                navigate(`/dashboard/edit-client/${params.row.idCliente}`)
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
        field: "nomeCliente",
        headerName: "Nome do cliente",
        width: 290
    },
    {
        field: "telefoneCliente",
        headerName: "Telefone do cliente",
        width: 200
    }

];

export default ClientList;