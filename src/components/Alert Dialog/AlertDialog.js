import React from "react";
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={() => props.close(false)}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Invalid Input"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.age.age < 0
              ? "Please enter a valid age!"
              : "Please enter a valid name and age!"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => props.close(false)} autoFocus>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
