import React, { Component} from 'react';
import Grid from '@material-ui/core/Grid';
import plantaPrimera from './../img/planta-1.jpg'

const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      backgroundImage: `url(${plantaPrimera})`,
      backgroundPosition: '0% 0%'
    }
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render() {
    return (
      <Grid container component="main" id="mapBg" 
      >
      <figure id="figureZoom" onMouseMove={this.handleMouseMove} style={this.state}>
      <img id="imgZoom" src={src} />
    </figure>
    </Grid>
    )
  } 

}
