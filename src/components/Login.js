import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      fontFamily: 'Noto Sans',
    },
    image: {
      backgroundImage: 'url(https://werfen.com/sites/default/files/styles/compress/public/2018-10/Werfen%20Home%20Background%208_0.jpg?itok=7EzEG7jt)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'right',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, ),
      backgroundColor:'#00A3E0',
    },
    tpr: {
        margin: theme.spacing(17, 0, 3),
        color: '#91A7B2',
        fontSize: '1.8em',
    },
    link: {
        color: '#91A7B2',
    }
  }));

  export default function SignInSide() {
    const classes = useStyles();
   
    return (
      <div className="wtn-wrapper">
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
          </Grid>
        </Grid>
      </div>
    );
  }
