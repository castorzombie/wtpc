import React, { Component } from 'react'
import { Redirect } from 'react-router';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class CustomDayPicker extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }
  
  handleDayClick = (day) => {
    this.setState({redirect: true});
  }

  render() {
    
    const modifiers = {
      thursdays: { daysOfWeek: [4] },
      reserved1: new Date(2019, 6, 30),
      reserved2: new Date(2019, 6, 31),
      reserved3: new Date(2019, 6, 29),
    };
    
    const modifiersStyles = {
      reserved1: {
        color: 'white',
        backgroundColor: '#EAAA00',
      },
      reserved2: {
        color: 'white',
        backgroundColor: '#EAAA00',
      },
      reserved3: {
        color: 'white',
        backgroundColor: '#EAAA00',
      },
      outside: {
        backgroundColor: 'white',
      },
    }; 
    
    return (
      <div>
          {this.state.redirect? <Redirect push to="reservar" /> : ''} 
          <DayPicker
              initialMonth={new Date(2019, 6)}
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
              selectedDays={[
                {
                after: new Date(2019, 6, 20),
                before: new Date(2019, 6, 25),
                }
              ]}
              onDayClick={this.handleDayClick}
          />
      </div>
    )

  }
}


