import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

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
                    <option value="" />
                    <option value={10}>Plaza 103 disponible en planta 1</option>
                    <option value={20}>Plaza 212 disponible en planta 2</option>
                    <option value={30}>Plaza 222 disponible en planta 2</option>
                  </Select>
                </Grid>
              </Grid>
            <div className={classes.heroButtons}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.primaryBtn}
            >
              Reservar Plaza
            </Button>
             </div>
              <Grid container spacing={2} justify="center" alignItems="center" >
              <Grid item>
                 Mapa Planta 1
                </Grid>
                <Grid item>
                  <Switch
                    defaultChecked
                    value="checkedF"
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                  />
                </Grid>
                <Grid item>
                  Mapa Planta 2
                </Grid>
              </Grid>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}