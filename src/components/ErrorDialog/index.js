import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = {
  topMargin: {
    margineTop: 5,
  },
};


const ErrorIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </SvgIcon>
);

export class ErrorDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

  handleClickOpen = () => {
    this.setState({ open: true, })
  };

  handleClose = () => {
    this.setState({ open: false, })
  };

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}>
          ErrorDialog
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}>
          <DialogTitle><ErrorIcon />{'This is sample error dialog.'}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please click either button.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Disagree</Button>
            <Button onClick={this.handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };
}

export default ErrorDialog;