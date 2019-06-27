import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default class DashboardHeader extends Component {
  render(){
  return (
    <React.Fragment>
      <main>
        <div className="headerContent">
          <Container maxWidth="sm">
            <h2  className="headerTypo">
              Lunes 26 de Julio de 2019
            </h2>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Plaza reservada 333 en Planta 1
            </Typography>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
  }
}