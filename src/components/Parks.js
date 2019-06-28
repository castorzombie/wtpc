import React, { Component } from 'react';
import NavToolbar from './NavToolbar';
import Calendar from './Calendar';
import Map from './Map';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';

export default class Parks extends Component {

    render() {

        return (
            <div className="wtn-wrapper">
                <NavToolbar />
                <Grid container component="main">
                    <Grid item xs={12} sm={12} md={5} >
                        <Calendar />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} >
                        <Map />
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }  
}