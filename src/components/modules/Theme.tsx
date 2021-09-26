import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    text: {
      primary: "#7021DE",
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', '"Kosugi Maru"'].join(","),
    h2: {
      fontFamily: "Open Sans",
      fontSize: "36px",
      fontWeight: 1200,
    },
    h4: {
      fontFamily: "Kosugi Maru",
      fontSize: "25px",
    },
  },
});

export default Theme;
