import { FC } from "react";
import { Box, Container, Grid, Typography, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import topImage from "../../images/top-image.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      marginTop: theme.mixins.toolbar.minHeight,
      height: 568,
    },
    contentGrid: {
      paddingTop: 50,
    },
    h1: {
      color: theme.palette.common.white,
      paddingLeft: 30,
    },
    h2: {
      color: theme.palette.common.white,
      paddingLeft: 200,
    },
    topImage: {
      width: 435,
      height: 435,
    },
    imageGrid: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const Home: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container id="home" className={classes.root} maxWidth={false}>
        <Grid container className={classes.contentGrid}>
          <Grid item xs={6} className={classes.imageGrid}>
            <img src={topImage} alt="monkey" className={classes.topImage} />
          </Grid>
          <Grid item xs={6}>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                backgroundColor: "#DE218F",
                width: 689,
                height: 222,
              }}
            >
              <Typography variant="h1" className={classes.h1}>
                Masaru Terada
              </Typography>
              <Typography variant="h2" className={classes.h2}>
                Web Application Developer
              </Typography>
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
