import React, { Component } from 'react';
import CalendarHeader from './CalendarHeader';
import CustomDayPicker from './CustomDayPicker';
import CalendarStatus from './CalendarStatus';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'react-day-picker/lib/style.css';
 

class Calendar extends Component {

  render() {  
    return (
      <div>
        <Container maxWidth="sm" className="headerContent">
          <CalendarHeader />
        </Container>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'center',}}>
            <Card style={{height: '100%', display: 'flex', flexDirection: 'column',}}>
              <Typography 
                style={{ color: '#28373C', fontSize: '1.6em',margin: '15px 0 0 0'}}
                align="center" variant="h4" color="inherit" noWrap>
                Calendario de reservas
              </Typography>
              <CardContent style={{flexGrow: 1,}}>
                <CustomDayPicker />
              </CardContent>
            </Card>
          </div>
          <CalendarStatus />
        </Container>
      </div>
    )
  }
}

export default Calendar;

