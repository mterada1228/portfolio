import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1500,
    xl: 2000,
  },
};

const Theme = createTheme({
  palette: {
    text: {
      primary: "#7021DE",
    },
    primary: {
      main: "rgba(34, 221, 84, 0.09)",
    },
    secondary: {
      main: "#7021DE",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 73,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', '"Kosugi Maru"'].join(","),
    h1: {
      fontFamily: "Open Sans",
      fontSize: "3rem",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "2rem",
      },
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: "1.8rem",
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: "1.2rem",
      },
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Open Sans",
      fontSize: "30px",
    },
    h4: {
      fontSize: "25px",
    },
    h5: {
      fontFamily: "Open Sans",
      fontSize: "20px",
    },
  },
});

export default Theme;
