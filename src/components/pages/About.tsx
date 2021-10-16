import { Avatar, Box, Container, Grid, Theme, Typography } from "@mui/material";
import { FC } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import useSize from "../hooks/useSize";
import myProfileImage from "../../images/profile_icon.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
      height: "25%",
    },
    title: {
      paddingTop: "5%",
      paddingBottom: "5%",
      [theme.breakpoints.down("md")]: {
        paddingTop: "20%",
        paddingBottom: "20%",
      },
    },
    imageContainer: {
      marginBottom: "20%",
    },
    image: {
      justifyContent: "flex-end",
    },
    textGrid: {
      textAlign: "left",
      justifyContent: "flex-start",
      paddingRight: "10%",
      paddingBottom: "5%",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "20%",
      },
    },
    text: {
      marginBottom: "5%",
    },
    h1: {
      color: theme.palette.text.primary,
    },
    h2: {
      color: theme.palette.text.primary,
    },
    h4: {
      color: theme.palette.text.primary,
      paddingTop: "3%",
      [theme.breakpoints.up("md")]: {
        paddingBottom: "10%",
      },
    },
  })
);

const About: FC = () => {
  const classes = useStyle();
  const { isMobileSize } = useSize();
  const selfIntroduction = () => {
    return (
      <>
        <Container className={classes.text}>
          <Typography variant="h4">1993年生まれの27歳。</Typography>
        </Container>
        <Container className={classes.text}>
          <Typography variant="h4">
            大学では物理学を専攻するも、そこでプログラミングに出会いIT業界を志しました。
          </Typography>
        </Container>
        <Container className={classes.text}>
          <Typography variant="h4">
            新卒で野村総合研究所に入社し、コンビニエンスストア向けの業務システムの保守・運用並びに新規システム構築に約2年間従事。
          </Typography>
        </Container>
        <Container className={classes.text}>
          <Typography variant="h4">
            2020年7月より、ファッション系ECサイトを運営する会社でサーバサイドエンジニアとして働いています。
          </Typography>
        </Container>
        <Container>
          <Typography variant="h4">
            好きなことは温泉、サウナとその後のビール！あと、全く当たらない競馬予想です。
          </Typography>
        </Container>
      </>
    );
  };

  return (
    <>
      <Container id="about" className={classes.root} maxWidth={false}>
        <Container className={classes.title}>
          <Typography variant="h1" className={classes.h1}>
            ABOUT
          </Typography>
        </Container>
        {isMobileSize ? (
          <Container>
            <Container className={classes.imageContainer}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    m: 1,
                    border: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "text.primary",
                    width: "50%",
                    paddingTop: "50%",
                    position: "relative",
                  }}
                >
                  <Avatar
                    src={myProfileImage}
                    sx={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  ></Avatar>
                </Box>
              </Box>
              <Typography variant="h4" className={classes.h4}>
                寺田 優
              </Typography>
            </Container>
            <Container className={classes.textGrid}>
              {selfIntroduction()}
            </Container>
          </Container>
        ) : (
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    m: 1,
                    border: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "text.primary",
                    width: "50%",
                    paddingTop: "50%",
                    position: "relative",
                  }}
                >
                  <Avatar
                    src={myProfileImage}
                    sx={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  ></Avatar>
                </Box>
              </Box>
              <Typography variant="h4" className={classes.h4}>
                寺田 優
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.textGrid}>
              {selfIntroduction()}
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default About;
