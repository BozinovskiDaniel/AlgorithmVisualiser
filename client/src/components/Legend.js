import React from "react";
import { Link } from "react-router-dom";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Material UI Icons
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Icon from "@material-ui/core/Icon";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "0 7em",
    marginTop: 30,
    height: "12vh",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  sortingAlgorithms: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
    fontSize: "1.5em",
  },
  leftGridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  rightGridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  legendText: {
    color: "rgba(0,0,0,0.7)",
    fontSize: "1.4em",
  },
  wallNode: {
    height: 25,
    width: 25,
    backgroundColor: "rgb(12, 53, 71)",
    borderRadius: 3,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  startNode: {
    height: 40,
    width: 40,
    color: "#e91e63",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  endNode: {
    height: 30,
    width: 30,
    color: "#e91e63",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  shortestPathNode: {
    height: 25,
    width: 25,
    backgroundColor: "rgb(255, 254, 106)",
    borderRadius: 3,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  unvisitedNode: {
    height: 25,
    width: 25,
    border: "1px solid rgba(30, 139, 195, 0.5)",
    borderRadius: 3,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  visitedNode: {
    height: 25,
    width: 25,
    backgroundColor: "rgba(0, 190, 218, 0.75)",
    borderRadius: 3,
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#e91e63",
    color: "#fff",
    fontSize: "0.58em",
    fontWeight: "600",
    "&:hover": {
      transform: "scale(1.02)",
      backgroundColor: "rgba(233,30,99, 0.9)",
    },
  },
  rightIcon: {
    height: 30,
    width: 30,
  },
});

function Legend(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={10}>
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <Grid container spacing={2}>
                <Grid item sm={4} className={classes.leftGridItem}>
                  <ChevronRightIcon className={classes.startNode} />
                </Grid>
                <Grid item sm={8} className={classes.rightGridItem}>
                  <Typography variant="h5" className={classes.legendText}>
                    Start Node
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <Grid container spacing={2}>
                <Grid item sm={4} className={classes.leftGridItem}>
                  <RadioButtonCheckedIcon className={classes.endNode} />
                </Grid>
                <Grid item sm={8} className={classes.rightGridItem}>
                  <Typography variant="h5" className={classes.legendText}>
                    End Node
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <Grid container spacing={2}>
                <Grid item sm={4} className={classes.leftGridItem}>
                  <div className={classes.wallNode} />
                </Grid>
                <Grid item sm={8} className={classes.rightGridItem}>
                  <Typography variant="h5" className={classes.legendText}>
                    Wall Node
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <Grid container spacing={2}>
                <Grid item sm={4} className={classes.leftGridItem}>
                  <div className={classes.shortestPathNode} />
                </Grid>
                <Grid item sm={8} className={classes.rightGridItem}>
                  <Typography variant="h5" className={classes.legendText}>
                    Shortest Path Node
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <Grid container spacing={2}>
                <Grid item sm={4} className={classes.leftGridItem}>
                  <div className={classes.unvisitedNode} />
                </Grid>
                <Grid item sm={8} className={classes.rightGridItem}>
                  <Typography variant="h5" className={classes.legendText}>
                    Unvisited Node
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4}>
              <Grid container spacing={2}>
                <Grid item sm={4} className={classes.leftGridItem}>
                  <div className={classes.visitedNode} />
                </Grid>
                <Grid item sm={8} className={classes.rightGridItem}>
                  <Typography variant="h5" className={classes.legendText}>
                    Visited Node
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={2} className={classes.sortingAlgorithms}>
          <Link to="/sorting" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={classes.button}
              endIcon={<DoubleArrowIcon className={classes.rightIcon} />}
            >
              Sorting Algorithms
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Legend);
