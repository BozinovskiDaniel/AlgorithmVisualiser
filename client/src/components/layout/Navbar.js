import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    display: "flex",
    backgroundColor: "#404040",
    height: "8vh",
    width: "100%",
    alignItems: "center",
    fontFamily: "Times New Roman",
  },
  navbarTitle: {
    fontSize: 35,
    color: "#eee",
    paddingLeft: "100px",
    width: "100%",
  },
  navbarList: {
    listStyle: "none",
    float: "right",
    width: "100%",
    paddingRight: "100px",
  },
  listItem: {
    fontSize: 18,
    color: "#eee",
    display: "inline",
    padding: "0 10px",
    cursor: "pointer",
    float: "right",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.75)",
    },
  },
}));

// onClick={() => callDijkstras()}

function Navbar(props) {
  const classes = useStyles();
  const { callDijkstras, callDFS } = props;

  return (
    <div className={classes.navbarContainer}>
      <h3 className={classes.navbarTitle}>Algorithm Visualiser</h3>
      <ul className={classes.navbarList}>
        <li className={classes.listItem}>Visualise BFS</li>
        <li className={classes.listItem} onClick={() => callDFS()}>
          Visualise DFS
        </li>
        <li className={classes.listItem}>Visualise A*</li>
        <li className={classes.listItem} onClick={() => callDijkstras()}>
          Visualise Dijkstra's
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
