import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
  },
  h3: {
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  grid_with_border_rigth: {
    position: "relative",
    "&::after": {
      content: '""',
      width: "4px",
      height: "100%",
      position: "absolute",
      backgroundColor: "red",
      left: "100%",
    },
  },
  card: {
    backgroundColor: theme.palette.grey[100],
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

const History: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.root} maxWidth={false}>
        <Container>
          <Typography id="history" variant="h3" className={classes.h3}>
            History
          </Typography>
          <Grid container>
            <Grid item xs={5}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5">hoge</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={1} className={classes.grid_with_border_rigth}></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={1} className={classes.grid_with_border_rigth}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5">fuga</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default History;
