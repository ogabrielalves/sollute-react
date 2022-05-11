import { Typography } from '@mui/material';
import React, {useContext} from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { AuthContext } from '../../../Context/AuthContext';

function Home() {

    const { empresa } = useContext(AuthContext)

    return ( 
        <Dashboard>
            <Typography variant="h5">Bem vindo, {empresa?.nomeFantasia}</Typography>
        </Dashboard>
     );
}

export default Home;