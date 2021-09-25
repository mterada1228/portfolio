import { FC, useState } from "react";
import { AppBar, Tabs, Tab, Toolbar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyle = makeStyles(() =>
  createStyles({
    tabs: {
      flexGrow: 1,
    },
  })
);

type IndexToTabName = {
  [key: number]: string;
};

const Header: FC = () => {
  const classes = useStyle();
  const [selectedTab, setSelectedTab] = useState(0);

  const indexToTabName: IndexToTabName = {
    0: "home",
    1: "about",
    2: "skils",
    3: "history",
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
            <Tab label="SKILS" />
            <Tab label="HISTORY" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
