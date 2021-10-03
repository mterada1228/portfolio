import { FC } from "react";
import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import frontEndImage from "../../images/pc.png";
import backEndImage from "../../images/server.png";
import devToolsImage from "../../images/settings-gears.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 50,
      backgroundColor: theme.palette.primary.main,
      textAlign: "center",
      height: 518,
    },
    root2: {
      marginTop: 50,
      backgroundColor: theme.palette.common.white,
      height: 518,
    },
    title: {
      paddingTop: 50,
      marginBottom: 50,
      display: "flex",
    },
    h2: {
      color: "#DE218F",
    },
    h3: {
      paddingTop: 50,
      color: "#DE218F",
    },
    h4: {
      paddingTop: 20,
      paddingBottom: 10,
      color: "#DE218F",
    },
    h5: {
      color: "#DE218F",
    },
    image: {
      width: 130,
      height: 130,
      marginTop: 50,
      marginBottom: 30,
    },
  })
);

const Skills: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container id="skills" className={classes.root} maxWidth={false}>
        <Container className={classes.title}>
          <Typography variant="h2" className={classes.h2}>
            SKILLS
          </Typography>
        </Container>
        <Container>
          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderTopLeftRadius: "70px",
                  borderBottomLeftRadius: "70px",
                  width: "100%",
                  height: 770,
                  boxShadow: 3,
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h3"
                  className={classes.h3}
                >
                  Front end
                </Typography>
                <img src={frontEndImage} alt="pc" className={classes.image} />
                <Typography variant="h4" className={classes.h4}>
                  Languages
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  CSS
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Sass
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  HTML
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  JavaScript
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  TypeScript
                </Typography>
                <Typography variant="h4" className={classes.h4}>
                  FrameWorks
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  React
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Redux
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Material-ui
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  width: "100%",
                  height: 770,
                  boxShadow: 3,
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h3"
                  className={classes.h3}
                >
                  Back end
                </Typography>
                <img src={backEndImage} alt="pc" className={classes.image} />
                <Typography variant="h4" className={classes.h4}>
                  Languages
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  SQL
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  PHP
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Ruby
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Java
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Python
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  ShellScript
                </Typography>
                <Typography variant="h4" className={classes.h4}>
                  FrameWorks
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Ruby on Rails
                </Typography>
                <Typography variant="h4" className={classes.h4}>
                  Cloud
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  AWS
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  borderTopRightRadius: "70px",
                  borderBottomRightRadius: "70px",
                  width: "100%",
                  height: 770,
                  boxShadow: 3,
                }}
              >
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h3"
                  className={classes.h3}
                >
                  Dev Tools
                </Typography>
                <img src={devToolsImage} alt="pc" className={classes.image} />
                <Typography variant="h4" className={classes.h4}>
                  Container
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  docker
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  docker-compose
                </Typography>
                <Typography variant="h4" className={classes.h4}>
                  Utility
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  git
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  Github, GitLub
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  VSCode
                </Typography>
                <Typography variant="h4" className={classes.h4}>
                  CI/CD
                </Typography>
                <Typography variant="h5" className={classes.h5}>
                  GitLab CI/CD
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container className={classes.root2} maxWidth={false}></Container>
    </>
  );
};

export default Skills;
