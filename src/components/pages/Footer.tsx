import { FC } from "react";
import { Container, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      height: 73,
    },
  })
);

const Footer: FC = () => {
  const classes = useStyle();

  return <Container className={classes.root} maxWidth={false} />;
};

export default Footer;
