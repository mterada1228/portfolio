import { FC, useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { AppBar, Box, Tabs, Tab, Toolbar } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import useSize from "../hooks/useSize";

const useStyle = makeStyles(() =>
  createStyles({
    tabs: {
      width: "100%",
    },
  })
);

type IndexToTabName = {
  [key: number]: string;
};

const Header: FC = () => {
  const classes = useStyle();
  const [selectedTab, setSelectedTab] = useState(0);
  const { isMobileSize } = useSize();

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={0} color="secondary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobileSize ? (
            ""
          ) : (
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
                  fontSize: 25,
                  fontWeight: 1000,
                  width: "15%",
                }}
                label="HOME"
              />
              <Tab
                sx={{
                  color: "white",
                  fontSize: 25,
                  fontWeight: 1000,
                  width: "15%",
                }}
                label="ABOUT"
              />
              <Tab
                sx={{
                  color: "white",
                  fontSize: 25,
                  fontWeight: 1000,
                  width: "15%",
                }}
                label="SKILLS"
              />
              <Tab
                sx={{
                  color: "white",
                  fontSize: 25,
                  fontWeight: 1000,
                  width: "15%",
                }}
                label="CONTACT"
              />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
