import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EmployeesService from '../../../Services/Employee/EmployeesService';
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
const service = new EmployeesService();

function EmployeesList() {

    const navigate = useNavigate();
   
    const { empresa } = useContext(AuthContext)

    const [pageSize, setPageSize] = useState(10)
    const [page, setPage] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {

        if (!empresa) return null;

        getData()
        async function getData() {
            const apiResponse = await service.getFuncionarios(empresa?.idEmpresa)
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
            getRowId={(row) => row.idFuncionario}
            onCellClick={(params) => {
                console.log(params.row)
                navigate(`/dashboard/edit-employee/${params.row.idFuncionario}`)
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
        field: "nomeFuncionario",
        headerName: "Nome",
        width: 290
    },
    {
        field: "cpfFuncionario",
        headerName: "CPF",
        width: 200
    },
    {
        field: "telefoneFuncionario",
        headerName: "Telefone",
        width: 200
    },
    {
        field: "salarioFuncionario",
        headerName: "Salario",
        width: 220
    }

];

export default EmployeesList;