import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';
import PinchZoomPan from "react-responsive-pinch-zoom-pan"
import plantaPrimera from './../img/planta-1-wtp.jpg'
import plantaSegunda from './../img/planta-2.jpg'

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state={
        plantaPrimera: true
    }
  }

  handleSwitch = (e) => {
    this.setState({
      plantaPrimera: !this.state.plantaPrimera
    })
  }

  render() {
    return (
      <Grid container component="main" id="mapBg" >
          <Container maxWidth="sm" className="mapTitle">
          <Grid container spacing={2} justify="center" alignItems="center" >
              <Grid item>
                 Mapa Planta 1
                </Grid>
                <Grid item>
                  <Switch
                    value="checkedF"
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={this.handleSwitch}
                  />
                </Grid>
                <Grid item>
                  Mapa Planta 2
                </Grid>
              </Grid>
          </Container>
          <PinchZoomPan position="center">
            <img alt="Parking Map" src={this.state.plantaPrimera ? plantaPrimera: plantaSegunda} />
        </PinchZoomPan>
      </Grid>
    )
  } 

}
