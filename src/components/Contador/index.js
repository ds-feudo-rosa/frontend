import { Button } from '@mui/material';
import React from 'react';

export default class Contador extends React.Component {

  constructor() {
    super();
    this.state = {
      verdadeiros: 0,
      falsos: 0,

    }

  }
  incrementarVerd() {
    this.setState({
      verdadeiros: this.state.verdadeiros + 1,
    });
  }
  incrementarFals() {
    this.setState({
      falsos: this.state.falsos + 1,
    });
  }



  render() {
    return (
      <>
        <>
          <div>
            <Button onClick={this.incrementarVerd.bind(this)}>
              {this.state.verdadeiros} Verdadeiro ✅
            </Button>
          </div>
          <div>
            <Button onClick={this.incrementarFals.bind(this)}>
              {this.state.falsos} Falso ❌
            </Button>
          </div>
        </>
      </>
    )
  }
}