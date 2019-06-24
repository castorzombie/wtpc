import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      fontFamily: 'Noto Sans',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4em 2em',
      backgroundColor: '#fff'
    },
    tpr: {
        margin: theme.spacing(10, 0, 3),
        color: '#91A7B2',
        fontSize: '1.4em',
        textAlign: 'center'
    },
    link: {
        color: '#91A7B2',
    }
  }));

  export default function SignInSide() {
    const classes = useStyles();
   
    return (
      <div className="wtn-wrapper loginwrapper">
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src="http://werfen.com/themes/custom/werfen_theme/img/werfen-logo.png" width="200px"/>
      <Typography className={classes.tpr}>
        Tower Parking Reservations
      </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              <Link to={`dashboard`} 
                  variant="contained"
                  color="primary"
                  className="wfnbtn wfnmargintop20">Sign In</Link>
            </div>
          </Container>
      </div>
    );
  }
