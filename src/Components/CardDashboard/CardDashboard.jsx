import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CardDashboard({ body, title, img, alt, button, urlPage }) {

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#f8f4f4', mr: 5, mb: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={img}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate(urlPage)} size="small" color="primary">
          {button}
        </Button>
      </CardActions>
    </Card>
  );
}