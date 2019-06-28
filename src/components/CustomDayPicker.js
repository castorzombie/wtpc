import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReservationDate, setReservationDate } from '../actions/parksActions';
import { Redirect } from 'react-router';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


  //CONSTANTS
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
    thursdays: { daysOfWeek: [4] },
    reserved4: new Date(2019, 6, 1),
    reserved5: new Date(2019, 6, 2),
    reserved1: new Date(2019, 6, 30),
    reserved2: new Date(2019, 6, 31),
    reserved3: new Date(2019, 6, 29),
    available1: new Date(2019, 6, 24),
    available2: new Date(2019, 6, 25),
    available3: new Date(2019, 6, 26),
  };
  const modifiersStyles = {
    reserved1: {
      color: 'white',
      backgroundColor: '#00A3E0',
    },
    reserved2: {
      color: 'white',
      backgroundColor: '#00A3E0',
    },
    reserved3: {
      color: 'white',
      backgroundColor: '#00A3E0',
    },
    reserved4: {
      color: 'white',
      backgroundColor: '#00A3E0',
    },
    reserved5: {
      color: 'white',
      backgroundColor: '#00A3E0',
    },
    available1: {
      color: 'white',
      backgroundColor: '#15A919',
    },
    available2: {
      color: 'white',
      backgroundColor: '#15A919',
    },
    available3: {
      color: 'white',
      backgroundColor: '#15A919',
    },
    outside: {
      backgroundColor: 'white',
    },
  }; 
  //END CONSTANTS




class CustomDayPicker extends Component {
  
  constructor(props) {
    super(props)
    this.state= {
      reservationDate:'Lunes 1 de Julio de 2019',
      redirectToReservar: false,
      redirectToLiberar: false,
      liberarVisible: true
    }
  }
  
  componentDidMount(){
    this.props.getReservationDate();
  }
  
  handleDayClick = (day,{reserved1,reserved2,reserved3,reserved4,reserved5,available1,available2,available3}) => {
    
    const weekDay = day.getDay()
    const month = day.getMonth();
    const dia = day.getDate() ;
    const year = day.getFullYear();
    const displayDate = `${WEEKDAYS_LONG[weekDay]} ${dia} de ${MONTHS[month]} de ${year}`

    this.setState(() => ({ reservationDate: displayDate }))
    
    this.props.setReservationDate(displayDate);
    
    if(reserved1 || reserved2 ||reserved3 || reserved4 || reserved5){
      this.setState({ liberarVisible: true })
    }
    if(available1 || available2 || available3) {
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



