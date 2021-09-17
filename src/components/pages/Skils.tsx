import { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ruby from "../../images/ruby.png";
import php from "../../images/php.png";
import js from "../../images/js.png";
import ts from "../../images/ts.png";

type Skill = {
  name: string;
  image: string;
};

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
  },
  h3: {
    marginbottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  h4: {
    marginbottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  gridContainer: {
    marginTop: theme.spacing(4),
  },
  card: {
    backgroundColor: theme.palette.grey[100],
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  cardMedia: {
    backgroundColor: theme.palette.common.white,
    margin: "auto",
    borderRadius: "50%",
  },
}));

const languages = [
  { name: "Ruby", image: ruby },
  { name: "PHP", image: php },
  { name: "JavaScript", image: js },
  { name: "TypeScript", image: ts },
];

const Skils: FC = () => {
  const classes = useStyle();

  const getSkillCard = (skill: Skill) => {
    return (
      <Grid item xs={3}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={skill.image}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent>
            <Typography variant="h5">{skill.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Container className={classes.root}>
      <Typography id="skils" variant="h3" className={classes.h3}>
        Skils
      </Typography>
      <Typography variant="h4" className={classes.h4}>
        Languages
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
        {languages.map((language) => getSkillCard(language))}
      </Grid>
    </Container>
  );
};

export default Skils;
