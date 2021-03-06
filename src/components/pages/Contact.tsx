import { FC } from "react";
import { Box, Container, Link, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      textAlign: "center",
      height: "25%",
    },
    h1: {
      color: theme.palette.text.primary,
      paddingTop: "5%",
      paddingBottom: "5%",
      [theme.breakpoints.down("md")]: {
        paddingTop: "20%",
        paddingBottom: "20%",
      },
    },
    h2: {
      color: theme.palette.text.primary,
      paddingBottom: "5%",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "20%",
      },
    },
    icon: {
      color: theme.palette.text.primary,
    },
  })
);

const Contact: FC = () => {
  const classes = useStyle();

  const getContactLink = (url: string, icon: any) => {
    const IconComponent = icon;

    return (
      <Link href={url} target="_blank" rel="noopener">
        <Box
          sx={{
            borderRadius: "50%",
            m: 1,
            border: 5,
            width: 70,
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "text.primary",
          }}
        >
          {<IconComponent className={classes.icon} fontSize="large" />}
        </Box>
      </Link>
    );
  };

  return (
    <>
      <Container id="contact" className={classes.root} maxWidth={false}>
        <Typography variant="h1" className={classes.h1}>
          CONTACT
        </Typography>
        <Typography variant="h2" className={classes.h2}>
          Please feel free to contact me!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          {getContactLink("https://twitter.com/mterada1228", TwitterIcon)}
          {getContactLink("https://github.com/mterada1228", GitHubIcon)}
          {getContactLink("mailto:mterada1228@gmail.com", MailOutlineIcon)}
        </Box>
      </Container>
    </>
  );
};

export default Contact;
