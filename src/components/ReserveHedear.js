import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    fontFamily: 'Noto Sans',
    backgroundColor: 'white'
  },
  icon: {
    marginRight: theme.spacing(2),
  },
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
  spotSelect: {
    marginTop: theme.spacing(2),
  }
}));

export default function ReservedHeader() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography  className={classes.headerTypo} component="h1" variant="h2" align="center" gutterBottom>
               Reservar Lunes 26 de Julio de 2019
            </Typography>
            <Grid  className={classes.spotSelect} container spacing={4} justify="center">
                <Grid item>
                <InputLabel align="center"  htmlFor="age-native-simple">Plazas disponibles</InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChange('age')}
                    inputProps={{
                      name: 'age',
                      id: 'age-native-simple',
                    }}
                    >
                    <option value={10}>Plaza 060 en planta 1</option>
                    <option value={20}>Plaza 061 en planta 1</option>
                    <option value={30}>Plaza 062 en planta 1</option>
                  </Select>
                </Grid>
              </Grid>
            <div className={classes.heroButtons}>
            <Link to={`dashboard`} 
                  variant="contained"
                  color="primary"
                  className="wfnbtn"
                  style={{ width: '100%', display: 'inline-block'}}> Reservar Plaza</Link>
             </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}