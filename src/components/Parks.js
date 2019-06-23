import React, { Component } from 'react';
import {connect} from 'react-redux';
import { showParks } from '../actions/parksActions';
import NavToolbar from './NavToolbar';
import DashboardHeader from './DashboardHeader';
import Calendar from './Calendar';
import Footer from './Footer';
import Park from './Park';

class Parks extends Component {

    componentDidMount() {
        this.props.showParks()
    }

    render() {
        const {parks} = this.props;
        return (
            <div className="wtn-wrapper">
                <NavToolbar />
                <DashboardHeader />
                <Calendar />
                {/* parks.map( park => (
                        <Park
                            key={park.id}
                            info={park}
                        />
                )) */} 
               <Footer /> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    parks: state.parks.parks
});

export default connect(mapStateToProps, {showParks})(Parks);
