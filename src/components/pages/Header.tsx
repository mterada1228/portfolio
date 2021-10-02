import { FC, useState } from "react";
import { AppBar, Tabs, Tab, Theme, Toolbar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      height: 73,
    },
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
    2: "skills",
    3: "contact",
  };

  const handleChange = (e: any, newSelectedTab: number) => {
    window.location.href = `#${indexToTabName[newSelectedTab]}`;
    setSelectedTab(newSelectedTab);
  };

  return (
    <>
      <AppBar position="fixed" color="secondary" className={classes.appbar}>
        <Toolbar>
          <Tabs
            value={selectedTab}
            className={classes.tabs}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { background: "#DE218F" },
            }}
            textColor="inherit"
            centered
          >
            <Tab
              sx={{
                color: "white",
                fontSize: 36,
                fontWeight: 1000,
                marginRight: 20,
              }}
              label="HOME"
            />
            <Tab
              sx={{
                color: "white",
                fontSize: 36,
                fontWeight: 1000,
                marginRight: 20,
              }}
              label="ABOUT"
            />
            <Tab
              sx={{
                color: "white",
                fontSize: 36,
                fontWeight: 1000,
                marginRight: 20,
              }}
              label="SKILLS"
            />
            <Tab
              sx={{ color: "white", fontSize: 36, fontWeight: 1000 }}
              label="CONTACT"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
