import { FC } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import topImage from "../../images/monkey.png";

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    backgroundColor: "#98fb98",
    height: "700px",
    marginTop: "50px",
  },
  h3: {
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  h2: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  topImage: {
    width: "300px",
    height: "300px",
  },
}));

const Home: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container id="home" className={classes.root}>
        <Typography variant="h3" className={classes.h3}>
          Masaru Terada
        </Typography>
        <Typography variant="h2" className={classes.h2}>
          Web developer's base
        </Typography>
        <img src={topImage} alt="monkey" className={classes.topImage} />
      </Container>
    </>
  );
};

export default Home;
