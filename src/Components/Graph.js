import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import CircularProgress from '@material-ui/core/CircularProgress';

import Compute from './Compute';

const styles = {};

export class Graph extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    const { classes, data } = this.props;
    return (
      <React.Fragment>
        <Plot data={data} />
      </React.Fragment>
    );
  }
}

export default Graph;
