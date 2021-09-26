import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    text: {
      primary: "#7021DE",
    },
    primary: {
      main: "rgba(34, 221, 84, 0.09)",
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', '"Kosugi Maru"'].join(","),
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
      fontFamily: "Kosugi Maru",
      fontSize: "25px",
    },
  },
});

export default Theme;
