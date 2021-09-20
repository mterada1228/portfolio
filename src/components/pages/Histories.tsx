import { FC } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import HistoryLeft from "../modules/HistoryLeft";
import HistoryRight from "../modules/HistoryRight";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
  },
  h3: {
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
}));

const Histories: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.root} maxWidth={false}>
        <Container>
          <Typography id="history" variant="h3" className={classes.h3}>
            History
          </Typography>
          <HistoryLeft />
          <HistoryRight />
        </Container>
      </Container>
    </>
  );
};

export default Histories;
