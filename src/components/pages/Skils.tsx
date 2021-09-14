import { FC } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
  },
  h3: {
    marginbottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
}));

const Skils: FC = () => {
  const classes = useStyle();

  return (
    <Container className={classes.root}>
      <Typography id="skils" variant="h3" className={classes.h3}>
        Skils
      </Typography>
    </Container>
  );
};

export default Skils;
