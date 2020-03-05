import React, { Component } from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  Modal,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useremail: "",
      password: ""
    };
  }

  handleemail = e => {
    this.setState({
      useremail: e.target.value
    });
  };

  handlepassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmiT = e => {
    this.setState({
      modalMsg: "Form is submitted"
    });
  };

  render() {
    return (
      <div>
        <Grid container xs={12} alignItems="flex-end">
          <Grid container xs={3} alignItems="flex-end"></Grid>
          <Grid
            container
            xs={6}
            style={{ display: "flex", placeContent: "center" }}
          >
            <Modal
              open={this.state.modalMsg ? true : false}
              onClose={() => this.setState({ modalMsg: null })}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  outline: "none"
                }}
              >
                <Grid
                  container
                  item={true}
                  xs={12}
                  style={{ height: 40, flexDirection: "row-reverse" }}
                >
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer"
                    }}
                    onClick={() => this.setState({ modalMsg: null })}
                  >
                    X
                  </div>
                </Grid>
                <Grid
                  container
                  item={true}
                  xs={12}
                  justify="center"
                  style={{
                    alignItems: "center",
                    height: "100%",
                    padding: "20px 30px",
                    textAlign: "center",
                    width: "30em"
                  }}
                >
                  {this.state.modalMsg}
                </Grid>
                <Grid container item={true} xs={12} style={{ height: 40 }} />
              </div>
            </Modal>

            <h3 style={{ marginTop: "4em" }}>Login Form</h3>
            <Paper style={{ padding: "2em", width: "100%" }}>
              <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmiT}
                style={{ width: "100%" }}
              >
                <Grid container spacing={6} alignItems="flex-end">
                  <Grid item md={true} sm={true} xs={true}>
                    <TextValidator
                      id="username"
                      label="Email"
                      type="email"
                      value={this.state.useremail}
                      onChange={this.handleemail}
                      fullWidth
                      autoFocus
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item md={true} sm={true} xs={true}>
                    <TextValidator
                      id="username"
                      label="Password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handlepassword}
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>

                <Grid container justify="center" style={{ marginTop: "2em" }}>
                  <Button
                    style={{ backgroundColor: "#43a047", color: "white" }}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </ValidatorForm>
            </Paper>
          </Grid>
          <Grid container xs={3} alignItems="flex-end"></Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
