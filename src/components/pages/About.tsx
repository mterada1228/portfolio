import { Avatar, Box, Container, Grid, Theme, Typography } from "@mui/material";
import { FC } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import myProfileImage from "../../images/profile_icon.png";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
    },
    title: {
      marginTop: 50,
      marginBottom: 50,
      display: "flex",
    },
    text: {
      marginBottom: 25,
    },
    image: {
      justifyContent: "flex-end",
    },
    textGrid: {
      textAlign: "left",
      justifyContent: "flex-start",
    },
    h2: {
      color: theme.palette.text.primary,
    },
    h4: {
      fontFamily: "Kosugi Maru",
    },
  })
);

const About: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.root} maxWidth={false}>
        <Container className={classes.title}>
          <Typography id="about" variant="h2" className={classes.h2}>
            ABOUT
          </Typography>
        </Container>
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
                  width: 381,
                  height: 381,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "text.primary",
                }}
              >
                <Avatar
                  src={myProfileImage}
                  sx={{ width: 349, height: 349 }}
                ></Avatar>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} className={classes.textGrid}>
            <Container className={classes.text}>
              <Typography variant="h4">1993年生まれの27歳。</Typography>
            </Container>
            <Container className={classes.text}>
              <Typography variant="h4">大学では物理学を専攻するも、</Typography>
              <Typography variant="h4">
                そこでプログラミングに出会いIT業界を志しました。
              </Typography>
            </Container>
            <Container className={classes.text}>
              <Typography variant="h4">
                新卒で野村総合研究所に入社し、
              </Typography>
              <Typography variant="h4">
                コンビニエンスストア向けの業務システムの
              </Typography>
              <Typography variant="h4">
                保守・運用並びに新規システム構築に約2年間従事。
              </Typography>
            </Container>
            <Container className={classes.text}>
              <Typography variant="h4">
                2020年7月より、ファッション系ECサイトを運営する会社で
              </Typography>
              <Typography variant="h4">
                サーバサイドエンジニアとして働いています。
              </Typography>
            </Container>
            <Container className={classes.text}>
              <Typography variant="h4">
                好きなことは温泉、サウナとその後のビール！
              </Typography>
              <Typography variant="h4">
                あと、全く当たらない競馬予想です。
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
