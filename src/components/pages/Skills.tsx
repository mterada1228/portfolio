import { FC } from "react";
import { Box, Container, Grid, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import useSize from "../hooks/useSize";
import frontEndImage from "../../images/pc.png";
import backEndImage from "../../images/server.png";
import devToolsImage from "../../images/settings-gears.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      textAlign: "center",
      height: "25%",
      paddingBottom: "5%",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "20%",
      },
    },
    title: {
      paddingTop: "5%",
      paddingBottom: "5%",
      [theme.breakpoints.down("md")]: {
        paddingTop: "20%",
        paddingBottom: "20%",
      },
    },
    image: {
      width: "25%",
      paddingBottom: "5%",
    },
    heading: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    h1: {
      color: "#DE218F",
    },
    h3: {
      paddingTop: "10%",
      paddingBottom: "10%",
      color: "#DE218F",
    },
    h4: {
      color: "#DE218F",
    },
    h5: {
      color: "#DE218F",
    },
  })
);

const Skills: FC = () => {
  const classes = useStyle();
  const { isMobileSize } = useSize();
  const frontEndSkills = () => {
    return (
      <Container>
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            Languages
          </Typography>
        </Container>
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
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            FrameWorks
          </Typography>
        </Container>
        <Typography variant="h5" className={classes.h5}>
          React
        </Typography>
        <Typography variant="h5" className={classes.h5}>
          Redux
        </Typography>
        <Typography variant="h5" className={classes.h5}>
          Material-ui
        </Typography>
      </Container>
    );
  };

  const backEndSkills = () => {
    return (
      <Container>
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            Languages
          </Typography>
        </Container>
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
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            FrameWorks
          </Typography>
        </Container>
        <Typography variant="h5" className={classes.h5}>
          Ruby on Rails
        </Typography>
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            Cloud
          </Typography>
        </Container>
        <Typography variant="h5" className={classes.h5}>
          AWS
        </Typography>
      </Container>
    );
  };

  const devToolsSkills = () => {
    return (
      <Container>
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            Container
          </Typography>
        </Container>
        <Typography variant="h5" className={classes.h5}>
          docker
        </Typography>
        <Typography variant="h5" className={classes.h5}>
          docker-compose
        </Typography>
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            Utility
          </Typography>
        </Container>
        <Typography variant="h5" className={classes.h5}>
          git
        </Typography>
        <Typography variant="h5" className={classes.h5}>
          Github, GitLub
        </Typography>
        <Typography variant="h5" className={classes.h5}>
          VSCode
        </Typography>
        <Container className={classes.heading}>
          <Typography variant="h4" className={classes.h4}>
            CI/CD
          </Typography>
        </Container>
        <Typography variant="h5" className={classes.h5}>
          GitLab CI/CD
        </Typography>
      </Container>
    );
  };

  return (
    <>
      <Container id="skills" className={classes.root} maxWidth={false}>
        <Container className={classes.title}>
          <Typography variant="h1" className={classes.h1}>
            SKILLS
          </Typography>
        </Container>
        {isMobileSize ? (
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                borderRadius: "30px",
                width: "100%",
                height: "100%",
                paddingBottom: "10%",
                boxShadow: 3,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
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
              {frontEndSkills()}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                borderRadius: "30px",
                width: "100%",
                height: "100%",
                marginTop: "20%",
                paddingBottom: "10%",
                boxShadow: 3,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
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
              {backEndSkills()}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                borderRadius: "30px",
                width: "100%",
                height: "100%",
                marginTop: "20%",
                paddingBottom: "10%",
                boxShadow: 3,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
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
              {devToolsSkills()}
            </Box>
          </Container>
        ) : (
          <Container>
            <Grid container>
              <Grid item xs={4}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    borderTopLeftRadius: "70px",
                    borderBottomLeftRadius: "70px",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "10%",
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
                  {frontEndSkills()}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "10%",
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
                  {backEndSkills()}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    borderTopRightRadius: "70px",
                    borderBottomRightRadius: "70px",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "10%",
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
                  {devToolsSkills()}
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
      </Container>
    </>
  );
};

export default Skills;
