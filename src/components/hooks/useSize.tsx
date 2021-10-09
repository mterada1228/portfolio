import { Theme, useMediaQuery } from "@mui/material";

const useSize = () => {
  const isMobileSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return { isMobileSize };
};

export default useSize;
