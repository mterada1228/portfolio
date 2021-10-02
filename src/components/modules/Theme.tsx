import { createTheme } from "@mui/material/styles";

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
      fontSize: "50px",
      fontWeight: 1200,
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: "36px",
      fontWeight: 1200,
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
