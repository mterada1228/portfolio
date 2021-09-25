import { FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Theme,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

type Props = {
  image: string;
  date: string;
  text: string;
};

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
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
      display: "flex",
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    card_media: {
      marginLeft: 15,
      height: 151,
      width: 151,
    },
    card_content: {
      textAlign: "left",
    },
  })
);

const HistoryLeft: FC<Props> = ({ image, date, text }) => {
  const classes = useStyle();

  return (
    <Grid container>
      <Grid item xs={5}>
        <Card className={classes.card}>
          <CardMedia
            image={image}
            title="crab palsur"
            className={classes.card_media}
          />
          <CardContent className={classes.card_content}>
            <Typography variant="h5">{date}</Typography>
            <Typography variant="h6">{text}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={1} className={classes.grid_with_border_rigth}></Grid>
    </Grid>
  );
};

export default HistoryLeft;
