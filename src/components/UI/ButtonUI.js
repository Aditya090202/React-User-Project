import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

function ButtonUI(props) {
  //Custom Theme lets you create custom components
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1b1919",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              borderRadius: "10px;",
              textTransform: "unset !important",
              fontSize: "15px",
            },
          },
        ],
      },
    },
  });
  return(
  <ThemeProvider theme={theme}>
    <Button
      type="submit"
      className="button-font"
      variant="contained"
    >
      Add User
    </Button>
  </ThemeProvider>
  );
}

export default ButtonUI;
