import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import PinchZoomPan from "react-responsive-pinch-zoom-pan"
import plantaPrimera from './../img/planta-1.jpg'
import plantaSegona from './../img/planta-1.jpg'

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundImage: `url(${plantaPrimera})`,
      backgroundPosition: '0% 0%'
    }
  }

  render() {
    return (
      <Grid container component="main" id="mapBg" >
          <PinchZoomPan>
            <img alt='Parking Map Image' src={plantaPrimera} />
        </PinchZoomPan>
      </Grid>
    )
  } 

}
