import { FC, useState, useEffect } from "react";
import { scroller } from "react-scroll";
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
    scroller.scrollTo(`${indexToTabName[newSelectedTab]}`, {
      duration: 700,
      delay: 0,
      offset: -60,
      smooth: "easeInOutQuart",
    });
    setSelectedTab(newSelectedTab);
  };

  useEffect(() => {
    const scrollAction = () => {
      if (2000 < window.scrollY) {
        setSelectedTab(3);
      } else if (1198 < window.scrollY) {
        setSelectedTab(2);
      } else if (576 < window.scrollY) {
        setSelectedTab(1);
      } else {
        setSelectedTab(0);
      }
    };

    window.addEventListener("scroll", scrollAction, {
      capture: false,
      passive: true,
    });

    scrollAction();

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);

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
