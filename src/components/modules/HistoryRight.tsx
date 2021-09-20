import { FC } from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
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

const HistoryRight: FC = () => {
  const classes = useStyle();

  return (
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
  );
};

export default HistoryRight;
