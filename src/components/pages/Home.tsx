import { FC } from "react";
import { Box, Container, Grid, Typography, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import useSize from "../hooks/useSize";
import topImage from "../../images/top-image.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.up("md")]: {
        marginTop: theme.mixins.toolbar.minHeight,
      },
      paddingTop: "5%",
      paddingBottom: "5%",
      height: "25%",
    },
    contentContainer: {
      paddingTop: "5%",
      paddingBottom: "5%",
      display: "flex",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        paddingTop: "20%",
        paddingBottom: "20%",
      },
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      "&::before": {
        display: "block",
        content: "",
        paddingTop: "100%",
      },
    },
    textConteiner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20%",
    },
    topImage: {
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
    h1: {
      paddingTop: "10%",
      color: "#DE218F",
      [theme.breakpoints.up("md")]: {
        color: "white",
        paddingLeft: "5%",
      },
    },
    h2: {
      color: "#DE218F",
      paddingBottom: "10%",
      [theme.breakpoints.up("md")]: {
        color: "white",
        paddingLeft: "10%",
      },
    },
  })
);

const Home: FC = () => {
  const classes = useStyle();
  const { isMobileSize } = useSize();

  return (
    <>
      <Container id="home" className={classes.root} maxWidth={false}>
        {isMobileSize ? (
          <Container className={classes.contentContainer}>
            <Container className={classes.imageContainer}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50%",
                    paddingTop: "50%",
                    position: "relative",
                  }}
                >
                  <img
                    src={topImage}
                    alt="monkey"
                    className={classes.topImage}
                  />
                </Box>
              </Box>
            </Container>
            <Container className={classes.textConteiner}>
              <Typography variant="h1" className={classes.h1}>
                Masaru Terada
              </Typography>
              <Typography variant="h2" className={classes.h2}>
                Web Application Developer
              </Typography>
            </Container>
          </Container>
        ) : (
          <Grid container className={classes.contentContainer}>
            <Grid item xs={6} className={classes.imageContainer}>
              <img src={topImage} alt="monkey" className={classes.topImage} />
            </Grid>
            <Grid item xs={6} className={classes.textConteiner}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  backgroundColor: "#DE218F",
                  width: "90%",
                }}
              >
                <Typography variant="h1" className={classes.h1}>
                  Masaru Terada
                </Typography>
                <Typography variant="h2" className={classes.h2}>
                  Web Application Developer
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Home;
