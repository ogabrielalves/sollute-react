import { Grid } from '@mui/material';
import React from 'react';

function NotFound() {
    const center = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <Grid container sx={center}>
            <h1>Página não encontrada</h1>
        </Grid>
    );
}

export default NotFound;