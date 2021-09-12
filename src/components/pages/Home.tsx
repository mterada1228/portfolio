import * as React from "react";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import { fade } from "@material-ui/core/styles/colorManipulator";
import backgroundImage from "../../images/gihyojp_logo.png";

const styles = (theme: Theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: fade("#DED780", 0.5),
  },
  title: {
    color: "#FFFFFF",
    paddingTop: 30,
  },
  image: {},
});

function Home(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <div>
      <Container className={classes.container}>
        <Typography
          variant="h2"
          color="inherit"
          noWrap
          align="center"
          className={classes.title}
        >
          Terada Masaru
        </Typography>
        <Typography
          variant="h2"
          color="inherit"
          noWrap
          align="center"
          className={classes.title}
        >
          Portfolio site
        </Typography>
        <img src={backgroundImage} alt="monkey" className={classes.image} />
      </Container>
    </div>
  );
}

export default withStyles(styles)(Home);
