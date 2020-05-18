import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: { margin: "0 15px" },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const { callDijkstras } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Algorithm Visualiser
          </Typography>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => callDijkstras()}
          >
            Visualise Dijkstra's
          </Button>
          <Button color="inherit" className={classes.button}>
            Visualise A*
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
