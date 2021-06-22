import * as React from "react";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Theme } from "@material-ui/core/styles";
import { withStyles, WithStyles } from "@material-ui/styles";
import Link from "@material-ui/core/Link";

const styles = (theme: Theme) => ({
  title: {
    fontSize: 40,
  },
  toolbar: {
    justifyContent: "space-between",
    backgroundColor: "lightgreen",
  },
});

function AppAppBar(props: WithStyles<typeof styles> & AppBarProps) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="#"
          >
            {"HOME"}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="#"
          >
            {"ABOUT"}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="#"
          >
            {"SKILS"}
          </Link>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="#"
          >
            {"CONTACT"}
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(AppAppBar);
