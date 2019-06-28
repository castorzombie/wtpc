import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavToolbar from './NavToolbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { getReservationDate } from '../actions/parksActions';


class LiberatePark extends Component {
  constructor(props){
    super(props)
    this.state={
      reservationDate:''
    }
  }

  componentDidMount(){
    this.setState(() =>({
      reservationDate: this.props.getReservationDate()
    }))
  }
  
  render(){
    const {reservationDate} = this.props
    console.log(reservationDate)
    return (
      <div className="wtn-wrapper">
      <NavToolbar />
        <main>
          <div className="headerContent">
          <Link to={`dashboard`} 
                variant="contained"
                color="primary"
                className="wfnbtn wfnmargintop20">Sign In</Link>
          <Container maxWidth="sm">
            <h2  className="headerTypo"> {this.state.reservationDate} </h2>
            <div style={{textAlign:'center', margin:'0 auto 10px auto'}}>
            <Link to={`dashboard`} 
                  variant="contained"
                  color="primary"
                  className="wfnbtn"
                  style={{ width: '100%', display: 'inline-block'}}> Liberar Plaza</Link>
            </div>
          </Container>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  reservationDate: state.parks.reservationDate
})

export default connect(mapStateToProps, {getReservationDate})(LiberatePark)