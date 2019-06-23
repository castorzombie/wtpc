import React from 'react'
import 'react-day-picker/lib/style.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomDayPicker from './CustomDayPicker';

const calendarStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
    calendarHead: {
      color: '#28373C',
      fontFamily: 'Noto Sans',
      fontSize: '1.8em',
      margin: '15px 0'
    },
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));
  
  //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  const cards = [1];  
  
  export default function Calendar() {

        const classes = calendarStyles();

        return (
          <div>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                {cards.map(card => (
                  <Card key={card} className={classes.card}>
                    <Typography className={classes.calendarHead} align="center" variant="h4" color="inherit" noWrap>
                      Calendario de reservas
                    </Typography>
                      <CardContent className={classes.cardContent}>
                        <CustomDayPicker/>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Container>
          </div>
        )
    }

