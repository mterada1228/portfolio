import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header: FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Home</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
