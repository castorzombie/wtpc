import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function MadeWithLove() {
    return (
      <Typography variant="body2"  align="center">
        Plaça d'Europa, 21-23, 08908 L'Hospitalet de Llobregat
      </Typography>
    );
  }
  const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: '#27373c',
      color: '#fff',
      padding: theme.spacing(2),
      marginTop: theme.spacing(6),
    },
  }));

  export default function Album() {
    const classes = useStyles();
    return (
    <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
        Werfen Tower parking
    </Typography>
    <MadeWithLove />
    </footer>

  )}