import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  headerInfo: {
      backgroundColor:'#00A3E0',
      fontFamily: 'Noto Sans',
  },
  primaryBtn: {
    backgroundColor:'#00A3E0',
    fontFamily: 'Noto Sans',
  },
  outlinedBtn: {
      borderColor: '#00A3E0',
      color: '#00A3E0',
      fontFamily: 'Noto Sans',
  },
  headerTypo: {
    color: '#28373C',
    fontFamily: 'Noto Sans',
    fontSize: '2.1em'
  },
  smallCapsHeader : {
    fontFamily: 'Noto Sans',
    fontSize: '1.4em',
  }
}));

export default function DashboardHeader() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography  className={classes.headerTypo} component="h1" variant="h2" align="center" gutterBottom>
              Lunes 26 de Julio de 2019
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Plaza reservada 333 en Planta 1
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button className={classes.outlinedBtn}  variant="outlined" color="primary">
                      Buscar ubicación en el mapa
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}