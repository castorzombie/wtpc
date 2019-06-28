import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getReservationDate } from '../actions/parksActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class CalendardHeader extends Component {

  constructor(props) {
    super(props)
    this.state= {
      reservationDate:'Lunes 1 de Julio de 2019',
      liberarVisible: true
    }
  }

  render() {
    const {reservationDate}=this.props;
    return (
      <React.Fragment>
        <h2 className="headerTypo">
          {reservationDate ? reservationDate : 'Ninguna Plaza Reservada'}
        </h2>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          {reservationDate ? 'Plaza reservada 060 en Planta 1': ''}
        </Typography>
        <div className={ this.state.liberarVisible ? "" : "hideItem"}
              style={{textAlign:'center', margin:'0 auto 10px auto'}}>
          <Button
              size='medium'
              variant="contained"
              color="primary"
              style={{backgroundColor:'#00A3E0'}}>
              Liberar Plaza</Button> 
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  reservationDate: state.parks.reservationDate
})

export default connect(mapStateToProps,{getReservationDate})(CalendardHeader);