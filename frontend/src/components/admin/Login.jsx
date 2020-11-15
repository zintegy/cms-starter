import React, {Component} from 'react';
import { TextField, Paper, Button, Container } from '@material-ui/core';

class LoginComponent extends Component {

  sendEmail(formData) {
    formData.preventDefault();
    console.log(formData);
    return;
  }


  render() {
    return (
      <Container>
        <Paper elevation={5}>
          <form onSubmit={this.sendEmail}>
            <TextField
              id="email"
              label="email"
              />

            <Button type="submit">Send email</Button>
          </form>
        </Paper>
      </Container>
    );
  }
}

export default LoginComponent;


