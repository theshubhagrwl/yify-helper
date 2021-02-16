import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MyContext } from "../Context/MyContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "5vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CardGrid = ({ children }) => {
  const classes = useStyles();
  const contextData = useContext(MyContext);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {contextData.loading ? <h1>Loading...</h1> : <> {children}</>}
      </Grid>
    </div>
  );
};

export default CardGrid;
