import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../images/logo.png";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";

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
    fontSize: "13px",
    color: "#fff",
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
    fontSize: 14,

    "&:hover": {
      background: "rgba(233,30,99, 0.9)",
      boxShadow: "0px 2px 10px #888888",
    },
  },

  visualiseButton: {
    background: "#e91e63",
    color: "#fff",
    borderRadius: "25px",
    padding: "0px 25px",
    margin: "0 5px",
    fontSize: 17,

    "&:hover": {
      background: "rgba(233,30,99, 0.9)",
      boxShadow: "0px 2px 10px #888888",
    },
  },
});

function SortingNavbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const {
    classes,
    resetArray,
    callMergesort,
    callQuicksort,
    callBubblesort,
    callSelectionsort,
    callInsertionsort,
    setAnimationSpeed,
  } = props;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const visualiseAlgorithm = () => {
    if (selectedAlgo === null)
      Swal.fire("Please select an Algorithm to Visualise!");
    else if (selectedAlgo === "Mergesort") callMergesort();
    else if (selectedAlgo === "Quicksort") callQuicksort();
    else if (selectedAlgo === "Bubblesort") callBubblesort();
    else if (selectedAlgo === "Selectionsort") callSelectionsort();
    else if (selectedAlgo === "Insertionsort") callInsertionsort();
  };

  const setSpeed = (speed) => {
    if (speed === "Fast") setAnimationSpeed(2);
    else if (speed === "Medium") setAnimationSpeed(15);
    else setAnimationSpeed(30);
    handleClose2();
  };

  const setAlgorithm = (algo) => {
    setSelectedAlgo(algo);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Grid item sm={12} xs={12} className={classes.container}>
          <Toolbar>
            <Grid className={classes.grow}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className={[classes.mainLogo]}>
                  <img src={logo} className={classes.logo} alt="logo" />
                  <Typography variant="h5">Sorting Algorithms</Typography>
                </Button>
              </Link>
            </Grid>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button color="inherit" className={classes.switchPageButton}>
                <KeyboardReturnIcon style={{ paddingRight: "5px" }} />
                BACK
              </Button>
            </Link>
            <Button
              color="inherit"
              className={classes.buttonFontSize}
              onClick={() => resetArray()}
            >
              Generate New Array
            </Button>

            <Button
              color="inherit"
              onClick={handleMenu2}
              className={classes.buttonFontSize}
            >
              Select Speed
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open2}
              onClose={handleClose2}
            >
              <MenuItem onClick={() => setSpeed("Fast")}>Fast</MenuItem>
              <MenuItem onClick={() => setSpeed("Medium")}>Medium</MenuItem>
              <MenuItem onClick={() => setSpeed("Slow")}>Slow</MenuItem>
            </Menu>

            <Button
              color="inherit"
              onClick={handleMenu}
              className={classes.buttonFontSize}
            >
              Select Sorting Algorithm
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => setAlgorithm("Mergesort")}>
                Merge sort
              </MenuItem>
              <MenuItem onClick={() => setAlgorithm("Quicksort")}>
                Quick sort
              </MenuItem>
              <MenuItem onClick={() => setAlgorithm("Bubblesort")}>
                Bubble sort
              </MenuItem>
              <MenuItem onClick={() => setAlgorithm("Selectionsort")}>
                Selection sort
              </MenuItem>
              <MenuItem onClick={() => setAlgorithm("Insertionsort")}>
                Insertion sort
              </MenuItem>
            </Menu>
            <Button
              color="inherit"
              className={[classes.buttonFontSize, classes.visualiseButton]}
              onClick={() => visualiseAlgorithm()}
            >
              Visualise {selectedAlgo ? selectedAlgo + "!" : "<Algorithm>"}
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SortingNavbar);

// const { callDijkstras, callDFS, callBFS, callAStar } = props;
