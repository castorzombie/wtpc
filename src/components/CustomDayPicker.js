import React, { Component } from 'react'
import { Redirect } from 'react-router';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


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




export default class CustomDayPicker extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      redirectToReservar: false,
      redirectToLiberar: false
    }
  }
  
  handleDayClick = (day,{reserved1,reserved2,reserved3,available1,available2,available3}) => {
    if(reserved1 || reserved2 ||reserved3){
      this.setState({redirectToLiberar: true})
    }
    if(available1 || available2 || available3) {
      this.setState({redirectToReservar: true})
    }
  }

  render() {
    
    const modifiers = {
      thursdays: { daysOfWeek: [4] },
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
    
    return (
      <div>
          {this.state.redirectToReservar? <Redirect push to="reservar" /> : ''}
          {this.state.redirectToLiberar? <Redirect push to="liberar" /> : ''}  
          <DayPicker
            showOutsideDays
            initialMonth={new Date(2019, 6)}
            modifiers={modifiers}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
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


