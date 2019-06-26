import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  headerContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 0),
  },
  headerTypo: {
    color: '#28373C',
    fontFamily: 'Noto Sans',
    fontSize: '2em'
  },
}));

export default function DashboardHeader() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.headerContent}>
          <Container maxWidth="sm">
            <Typography  className={classes.headerTypo} component="h1" variant="h2" align="center" gutterBottom>
              Lunes 26 de Julio de 2019
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Plaza reservada 333 en Planta 1
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}