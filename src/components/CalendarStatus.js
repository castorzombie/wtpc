import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const CalendarStatus = () =>  
    <List>
        <ListItem>
            <ListItemAvatar>
                <Avatar style={{margin: 0, color: '#fff', backgroundColor: '#00A3E0', fontSize:'.9em'}}>R</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Plaza Reservada" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar style={{ margin: 0, color: '#fff', backgroundColor: '#15A919', fontSize:'.9em'}}>D</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Plazas Disponibles" />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
                <Avatar style={{ margin: 0, color: '#28373C', backgroundColor: '#EBF5F7', fontSize:'.9em'}}>N</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Sin Plazas Disponibles" />
        </ListItem>
    </List> 
export default CalendarStatus;