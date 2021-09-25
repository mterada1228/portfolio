import { FC } from "react";
import { Container, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import HistoryLeft from "../modules/HistoryLeft";
import HistoryRight from "../modules/HistoryRight";
import crubpalsur from "../../images/crabPalsur.jpg";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      textAlign: "center",
    },
    h3: {
      marginBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
  })
);

const Histories: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.root} maxWidth={false}>
        <Container>
          <Typography id="history" variant="h3" className={classes.h3}>
            History
          </Typography>
          <HistoryLeft image={crubpalsur} date="2016年3月" text="首都大" />
          <HistoryRight image={crubpalsur} date="2016年3月" text="首都大" />
          <HistoryLeft image={crubpalsur} date="2016年3月" text="首都大" />
          <HistoryRight image={crubpalsur} date="2016年3月" text="首都大" />
        </Container>
      </Container>
    </>
  );
};

export default Histories;
