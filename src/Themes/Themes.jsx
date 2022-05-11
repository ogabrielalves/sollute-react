import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3E00FF',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,

    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: 6,
                    backgroundColor: '#3E00FF',
                    border: '2px solid #3E00FF',
                    transition: '0.4s',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#3E00FF'
                    }
                },
                containedInfo: {
                    backgroundColor: '#FFD500',
                    color: '#000000',
                    transition: '0.4s',
                    cursor: 'pointer'
                },
                outlined: {
                    borderRadius: 6,
                    border: '2px solid #3E00FF',
                    transition: '0.4s',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#3E00FF',
                        color: 'white',
                        border: '2px solid #3E00FF'                   
                    }
                }
            }
        }
    }
})

export default theme;