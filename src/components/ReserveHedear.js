import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


export default class ReservedHeader extends Component {
    constructor(props){
      super(props)   
    }

   handleChange = () =>{}

    render(){

      return (
        <React.Fragment>
          <main>
            <div >
              <Container maxWidth="sm">
                <Typography style={{  marginTop:'1em',  color: '#28373C',fontFamily: 'Noto Sans', fontSize: '1.6em'}} component="h1" variant="h2" align="center" gutterBottom>
                  Reservar Lunes 26 de Julio de 2019
                </Typography>
                <Grid style={{padding:'10px'}} container spacing={4} justify="center">
                    <Grid item>
                    <InputLabel align="center"  htmlFor="age-native-simple">Plazas disponibles</InputLabel>
                      <Select
                        native
                        value=''
                        onChange={this.handleChange('age')}
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
                <div style={{padding:'10px'}}>
                <Link 
                      to={`dashboard`} 
                      variant="contained"
                      color="primary"
                      className="wfnbtn"
                      style={{ width: '100%', display: 'inline-block'}}> Reservar Plaza
                  </Link>
                </div>
              </Container>
            </div>
          </main>
        </React.Fragment>
      );
    }
}