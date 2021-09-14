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

const Skils: FC = () => {
  const classes = useStyle();

  return (
    <Container className={classes.root}>
      <Typography id="skils" variant="h3" className={classes.h3}>
        Skils
      </Typography>
      <Typography variant="h4" className={classes.h4}>
        Languages
      </Typography>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={ruby}
              style={{ width: "130px", height: "130px" }}
            />
            <CardContent>
              <Typography variant="h5">Ruby</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={php}
              style={{ width: "130px", height: "130px" }}
            />
            <CardContent>
              <Typography variant="h5">PHP</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={js}
              style={{ width: "130px", height: "130px" }}
            />
            <CardContent>
              <Typography variant="h5">JavaScript</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={ts}
              style={{ width: "130px", height: "130px" }}
            />
            <CardContent>
              <Typography variant="h5">TypeScript</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skils;
