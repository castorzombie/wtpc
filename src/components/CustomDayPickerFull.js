import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { getReservationDate, setReservationDate } from '../actions/parksActions';
import { Redirect } from 'react-router';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


  //CONSTANTS
  
  const reservedMockupDates = [
    new Date(2019, 6, 5),
    new Date(2019, 6, 8), new Date(2019, 6, 9), new Date(2019, 6, 10), new Date(2019, 6, 11), new Date(2019, 6, 12),
    new Date(2019, 6, 15), new Date(2019, 6, 16), new Date(2019, 6, 17), new Date(2019, 6, 18), new Date(2019, 6, 19),
    new Date(2019, 6, 15), new Date(2019, 6, 16), new Date(2019, 6, 17), new Date(2019, 6, 18), new Date(2019, 6, 19),
    new Date(2019, 6, 22), new Date(2019, 6, 23), new Date(2019, 6, 29), new Date(2019, 6, 30), new Date(2019, 6, 31)
  ];

  const freeMockupDates = [
    new Date(2019, 6, 24), new Date(2019, 6, 25), new Date(2019, 6, 26)
  ];

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
  const WEEKDAYS_SHORT = ['Do', 'Lu', 'Ma', 'Me', 'Ju', 'Ve', 'Sa'];

  const modifiers = {
    reserved: reservedMockupDates,
    available: freeMockupDates
  };

  const modifiersStyles = {
    reserved: {
      color: 'white',
      backgroundColor: '#00A3E0',
    },
    available: {
      color: 'white',
      backgroundColor: '#15A919',
    }
  }; 
  //END CONSTANTS


class CustomDayPicker extends Component {
  
  constructor(props) {
    super(props)
    this.state= {
      redirectToReservar: false,
      redirectToLiberar: false
    }
  }
  
  componentDidMount(){
    this.props.getReservationDate();
  }
  
  handleDayClick = (day,{reserved,available}) => {

    const month = day.getMonth();
    const dia = day.getDate() ;
    const year = day.getFullYear();
    const reduxDate = [year,month,dia]
    
    this.props.setReservationDate(reduxDate);
    
    if(reserved){
      this.setState({ liberarVisible: true })
    }
    if(available) {
      this.setState({redirectToReservar: true});
    }

  }

  render() {

    return (
      <div>
        {this.state.redirectToReservar? <Redirect push to="reservar" /> : ''}
        <DayPicker
          showOutsideDays
          initialMonth={new Date(2019, 6)}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
          onDayClick={this.handleDayClick}
          locale="es"
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={1}
        />
      </div>
    )

  }
}

const mapStateToProps = state => ({
  reservationDate: state.parks.reservationDate
})

export default connect(mapStateToProps,{getReservationDate, setReservationDate})(CustomDayPicker);



