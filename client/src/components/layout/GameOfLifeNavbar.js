import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../images/logo.png";

import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
} from "@material-ui/core";

const styles = (theme) => ({
  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    width: "100%",
    margin: "auto",
    paddingRight: 90,
  },
  buttonFontSize: {
    fontSize: "15px",
    color: "#eee",
    margin: "0 10px",
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  AppBar: {
    //height:400,
    //background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
    backgroundColor: "rgba(30, 139, 195, 0.9)",
    backgroundSize: "cover",
  },
  mainLogo: {
    color: "#fff",
    justifyContent: "left",
    paddingLeft: 90,
    "&:hover": {
      background: "transparent",
    },
  },
  switchPageButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",
    margin: "0 5px",
    fontSize: 12,

    "&:hover": {
      background: "rgba(233,30,99, 0.9)",
      boxShadow: "0px 2px 10px #888888",
    },
  },

  loginButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",
    margin: "0 5px",

    "&:hover": {
      background: "rgba(233,30,99, 0.9)",
      boxShadow: "0px 2px 10px #888888",
    },
    sortingTitle: {
      fontSize: 10,
      color: "#eee",
    },
  },
});

function GameOfLifeNavbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const {
    classes,
    clearGrid,
    running,
    setRunning,
    runSimulation,
    runningRef,
  } = props;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className={[classes.mainLogo]}>
                  <img src={logo} className={classes.logo} alt="logo" />
                  <Typography variant="h5">GAME OF LIFE</Typography>
                </Button>
              </Link>
            </Grid>

            <Button
              color="inherit"
              className={classes.buttonFontSize}
              onClick={() => clearGrid()}
            >
              Clear Grid
            </Button>
            <Button
              color="inherit"
              className={[classes.buttonFontSize, classes.loginButton]}
              onClick={() => {
                setRunning(!running);
                runningRef.current = true;
                runSimulation();
              }}
            >
              {running ? "STOP" : "START"} SIMULATION
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(GameOfLifeNavbar);

// const { callDijkstras, callDFS, callBFS, callAStar } = props;
