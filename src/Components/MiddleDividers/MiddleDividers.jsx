import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function MiddleDividers() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 5 }}>
      <Divider variant="fullWidth" sx={{bgcolor: 'black'}}/>
    </Box>
  );
}