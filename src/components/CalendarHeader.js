import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getReservationDate } from '../actions/parksActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Dicembre',
];
const WEEKDAYS_LONG = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];

class CalendardHeader extends Component {

  constructor(props) {
    super(props)
    this.state= {
      reservationDate:'Viernes 5 de Julio de 2019',
      liberarVisible: false,
      reservedSpotNumber: true
    }
  }

  componentDidMount() {

    const day = new Date()
    const weekDay = day.getDay()
    const month = day.getMonth();
    const dia = day.getDate() ;
    const year = day.getFullYear();

    const displayDate = `${WEEKDAYS_LONG[weekDay]} ${dia} de ${MONTHS[month]} de ${year}`;

    this.setState(() => ({ reservationDate: displayDate }))

  }

  componentDidUpdate(previousProps) {
    
    const { reservationDate } = this.props;
    
    const day = new Date(reservationDate[0], reservationDate[1], reservationDate[2])
    const weekDay = day.getDay()
    const month = day.getMonth();
    const dia = day.getDate() ;
    const year = day.getFullYear();

    const currentDay = new Date();

    const displayDate = `${WEEKDAYS_LONG[weekDay]} ${dia} de ${MONTHS[month]} de ${year}`;
    
    if (this.props.reservationDate !== previousProps.reservationDate) {
      
      this.setState(() => ({ reservationDate: displayDate }))

      if( day > currentDay ){
        this.setState( () => ({ 
          liberarVisible: true,
          reservedSpotNumber: true
         }))
      }
      if(day < currentDay){
        this.setState( () => ({ 
          liberarVisible: false,
          reservedSpotNumber: false
        }))
      }
      if(day.toLocaleDateString() === currentDay.toLocaleDateString()){
        this.setState( () => ({ 
          liberarVisible: false,
          reservedSpotNumber: true
        }))
      }
      
    }
  }

  render() {
    const {reservationDate}=this.props;
    return (
      <React.Fragment>
        <h2 className="headerTypo">
          {this.state.reservationDate ? this.state.reservationDate : 'Ninguna Plaza Reservada'}
        </h2>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          {this.state.reservedSpotNumber ? 'Plaza reservada 060 en Planta 1': 'Sin plaza asignada'}
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