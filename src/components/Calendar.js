import React, { Component } from 'react'
import 'react-day-picker/lib/style.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CustomDayPicker from './CustomDayPicker';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Redirect } from 'react-router';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

  //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  const cards = [1];  
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
  
  class Calendar extends Component {
      constructor(props) {
        super(props)
        this.state= {
          reservationDate:'',
          redirectToReservar: false,
          redirectToLiberar: false,
          liberarVisible: false
        }
      }
      handleDayClick = (day,{reserved1,reserved2,reserved3,available1,available2,available3}) => {
        if(reserved1 || reserved2 ||reserved3){
          const weekDay = day.getDay()
          const month = day.getMonth();
          const dia = day.getDate() ;
          const year = day.getFullYear();
          this.setState({
            reservationDate: `${ WEEKDAYS_LONG[weekDay]} ${dia} de ${MONTHS[month]} de ${year}`,
            liberarVisible: true
          })
        }
        if(available1 || available2 || available3) {
         this.setState({redirectToReservar: true})
        }
      }

   render () {  
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
            <div className="headerContent">
              <Container maxWidth="sm">
                <h2  className="headerTypo">
                {this.state.reservationDate ? this.state.reservationDate : 'Ninguna Plaza Reservada'}
                </h2>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                {this.state.reservationDate ? 'Plaza reservada 333 en Planta ': ''}
                </Typography>
                <div className={ this.state.liberarVisible ? "" : "hideItem"} style={{textAlign:'center', margin:'0 auto 10px auto'}}>
                  <Button a 
                      size='medium'
                      variant="contained"
                      color="primary"
                      style={{backgroundColor:'#00A3E0'}}>
                      Liberar Plaza</Button> 
                </div>
              </Container>
            </div>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
               <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center',}}>
                {cards.map(card => (
                  <Card key={card} 
                    style={{height: '100%', display: 'flex', flexDirection: 'column',}}>
                    <Typography 
                      style={{ color: '#28373C', fontFamily: 'Noto Sans', fontSize: '1.6em',margin: '15px 0 0 0'}}
                      align="center" variant="h4" color="inherit" noWrap>
                      Calendario de reservas
                    </Typography>
                      <CardContent style={{flexGrow: 1,}}>
                      {this.state.redirectToReservar? <Redirect push to="reservar" /> : ''}
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
                    </CardContent>
                  </Card>
                ))}
              </div>
                <List>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar
                     style={{margin: 0, color: '#fff', backgroundColor: '#00A3E0', fontSize:'.9em'}}>R</Avatar>
                  </ListItemAvatar>
                      <ListItemText
                        primary="Plaza Reservada"
                      />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar style={{ margin: 0, color: '#fff', backgroundColor: '#15A919', fontSize:'.9em'}}>D</Avatar>
                  </ListItemAvatar>
                      <ListItemText
                        primary="Plazas Disponibles"
                      />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar 
                      style={{ margin: 0, color: '#fff', backgroundColor: '#00A3E0', fontSize:'.9em'}}>N</Avatar>
                  </ListItemAvatar>
                      <ListItemText
                        primary="Sin Plazas Disponibles"
                      />
                    </ListItem>
                </List>
            </Container>
          </div>
        )
    }
  }

  export default Calendar;

