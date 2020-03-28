import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <ToolBar>
            <Typography variant='h6' color='inherit'>
              Differential Equation Numerical Solver
            </Typography>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
