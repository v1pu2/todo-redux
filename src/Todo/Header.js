import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 80
    },
    heading: {
        margin: "auto"
    }
});

const Header = () => {
const classes=useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.heading} align="center" variant="h5">Todo app</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
