import React from 'react'
import 'react-day-picker/lib/style.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomDayPicker from './CustomDayPicker';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

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
    fontSize: '1.6em',
    margin: '15px 0 0 0'
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarDisponible: {
    margin: 0,
    color: '#fff',
    backgroundColor: '#15A919',
    fontSize:'.9em'
  },
  avatarReservada: {
    margin: 0,
    color: '#fff',
    backgroundColor: '#00A3E0',
    fontSize:'.9em'
  },
  avatarNoDisponible: {
    margin: 0,
    color: '#fff',
    backgroundColor: '#00A3E0',
    fontSize:'.9em'
  }
  }));
  
  //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  const cards = [1];  
  
  export default function Calendar() {

        const classes = calendarStyles();
        const [dense, setDense] = React.useState(false);
        const [secondary, setSecondary] = React.useState(false);

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
                <List>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar className={classes.avatarReservada}>R</Avatar>
                  </ListItemAvatar>
                      <ListItemText
                        primary="Plaza Reservada"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar className={classes.avatarDisponible}>D</Avatar>
                  </ListItemAvatar>
                      <ListItemText
                        primary="Plazas Disponibles"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>
                    <ListItem>
                    <ListItemAvatar>
                    <Avatar className={classes.avatarNoDisponible}>ND</Avatar>
                  </ListItemAvatar>
                      <ListItemText
                        primary="Sin Plazas Disponibles"
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>
                </List>
            </Container>
          </div>
        )
    }

