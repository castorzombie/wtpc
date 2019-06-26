import React from 'react';
import { Link } from 'react-router-dom';
import NavToolbar from './NavToolbar';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
    fontFamily: 'Noto Sans',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  primaryBtn: {
    backgroundColor:'#00A3E0',
    fontFamily: 'Noto Sans',
    marginBottom: theme.spacing(4),
    '&:hover': {
      background: "#66C8ED",
    }
  },
  headerTypo: {
    color: '#28373C',
    fontFamily: 'Noto Sans',
    fontSize: '1.6em'
  },
}));

export default function LiberatePark() {
  const classes = useStyles();

  return (
    <div className="wtn-wrapper">
    <NavToolbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography  className={classes.headerTypo} component="h1" variant="h2" align="center" gutterBottom>
               Liberar Plaza 059 el Lunes 26 de Julio de 2019
            </Typography>
            <div className={classes.heroButtons}>
            <Link to={`dashboard`} 
                  variant="contained"
                  color="primary"
                  className="wfnbtn"
                  style={{ width: '100%', display: 'inline-block'}}> Liberar Plaza</Link>
             </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}