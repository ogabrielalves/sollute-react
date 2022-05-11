import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button, Grid } from '@mui/material';


export default function CardPrice(props) {

  // Style
  const styleCard = {
    maxWidth: 240,
    borderBottom: `${props.color} solid 10px`,
    boxShadow: '12px 0px 30px 2px rgba(0,0,0,0.4)',
    '&:hover': {
      boxShadow: '5px 5px 33px 15px rgba(81,26,255,0.71)',
    }
  }

  return (
    <Card sx={styleCard}>

      <CardActionArea>

        <Typography gutterBottom variant="h5" component="div" style={{fontWeight: 'bold'}} mt={2}>
          {props.titlePrice}
        </Typography>

        <Typography gutterBottom variant="h5" component="div" style={{fontWeight: 'bold'}} mb={-2}>
          {props.valor}
        </Typography>

        <CardMedia
          component="img"
          height={300}
          image={props.image}
          alt="Img Card Price 1"
        />

        <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>

          <Grid>
            <Button variant={props.variant}>
              Assinar
            </Button>
          </Grid>

        </CardContent>

      </CardActionArea>
    </Card>
  );
}