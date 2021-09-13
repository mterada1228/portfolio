import { FC, useState } from "react";
import { AppBar, makeStyles, Tabs, Tab, Toolbar } from "@material-ui/core";

const useStyle = makeStyles({
  tabs: {
    flexGrow: 1,
  },
});

type IndexToTabName = {
  [key: number]: string;
};

const Header: FC = () => {
  const classes = useStyle();
  const [selectedTab, setSelectedTab] = useState(0);

  const indexToTabName: IndexToTabName = {
    0: "home",
    1: "about",
  };

  const handleChange = (e: any, newSelectedTab: number) => {
    window.location.href = `#${indexToTabName[newSelectedTab]}`;
    setSelectedTab(newSelectedTab);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Tabs
            value={selectedTab}
            className={classes.tabs}
            onChange={handleChange}
            centered
          >
            <Tab label="HOME" />
            <Tab label="ABOUT" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
