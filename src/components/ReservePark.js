import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavToolbar from './NavToolbar';
import Reserveheader from './ReserveHedear';
import Map from './Map';
import Footer from './Footer';

export default class ReservePark extends Component {
    render() {
        return (
            <div className="wtn-wrapper">
                <NavToolbar />
                <Grid container component="main">
                    <CssBaseline />
                    <Grid item xs={12} sm={12} md={5} >
                        <Reserveheader />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} >
                        <Map />
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
};
