import React, { Component } from 'react';
import Graph from './Graph';
import Compute from './Compute';
import Button from '@material-ui/core/Button';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getSolution = this.getSolution.bind(this);
    this.removeLatest = this.removeLatest.bind(this);
  }

  getSolution() {
    const myObject = Compute(1.0, 5.0, 0.05, 5.0);
    console.log(myObject);
    let tempX = myObject.xArr;
    let tempY = myObject.yArr;
    let newCurve = {
      x: tempX,
      y: tempY,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' }
    };
    this.setState({
      data: [...this.state.data, newCurve]
    });
    console.log(this.state);
  }

  removeLatest() {
    this.setState({
      data: this.state.data.slice(0, this.state.data.length - 1)
    });
  }
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Graph data={data} />
        <br />
        <Button onClick={this.getSolution} variant='contained' color='primary'>
          Click me to compute!
        </Button>
        <br />
        <Button onClick={this.removeLatest} variant='contained' color='primary'>
          Remove Latest Graph
        </Button>
      </React.Fragment>
    );
  }
}

export default Calculator;
