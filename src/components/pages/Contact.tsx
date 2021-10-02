import { FC } from "react";
import { Box, Container, Link, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      textAlign: "center",
      height: 518,
    },
    h2: {
      color: theme.palette.text.primary,
      paddingTop: 130,
      paddingBottom: 50,
    },
    h3: {
      color: theme.palette.text.primary,
      paddingBottom: 50,
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
      <Container className={classes.root} maxWidth={false}>
        <Typography id="about" variant="h2" className={classes.h2}>
          CONTACT
        </Typography>
        <Typography id="about" variant="h3" className={classes.h3}>
          Please feel free to contact me
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
