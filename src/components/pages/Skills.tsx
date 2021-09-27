import { FC } from "react";
import { Container, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

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
  })
);

const Skills: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.root} maxWidth={false}>
        <Container className={classes.title}>
          <Typography id="about" variant="h2" className={classes.h2}>
            SKILLS
          </Typography>
        </Container>
      </Container>
      <Container className={classes.root2} maxWidth={false}></Container>
    </>
  );
};

export default Skills;
