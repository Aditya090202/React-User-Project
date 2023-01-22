/* eslint-disable eqeqeq */
import React, { useState } from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { styled } from "@mui/material/styles";
import "./User.css";
//import Button from "@mui/material/Button";
import ButtonUI from "../UI/ButtonUI";
import { TextField } from "@mui/material";

function User(props) {
  // //Custom Mui Component
  // const CssTextField = styled(TextField)({
  //   "& label.Mui-focused": {
  //     color: "gray",
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     "& fieldset": {
  //       borderColor: "gray",
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: "#19191b",
  //     },
  //   },
  // });
  //let [isInputEmpty, setIsInputEmpty ] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // const isButtonClicked = (value) => {
  //   console.log(value);
  // };
  const whenUserNameAdded = (event) => {
    setEnteredUsername(event.target.value);
  };
  const whenAgeAdded = (event) => {
    setEnteredAge(event.target.value);
  };

  const whenUserAdded = (event) => {
    event.preventDefault();
    let data = {
      id: "e" + Math.floor(Math.random() * 1000).toString(),
      username: enteredUsername,
      age: enteredAge,
    };
    if(enteredAge.length == 0 && enteredAge == 0){
      data = {};
      props.renderModal(true);
    }
    else if(enteredAge < 0){
      console.log(enteredAge)
      data = {age: enteredAge};
      props.renderModal(true);
    }
    else{
      props.renderModal(false);
    }
    props.onSaveData(data);
    setEnteredAge('');
    setEnteredUsername('');
  };

  return (
    <div className="user-input">
      <form onSubmit={whenUserAdded}>
        <div className="user-input__controls">
          <TextField
            type='text'
            fullWidth
            label="Username"
            value={enteredUsername}
            onChange={whenUserNameAdded}
          />
        </div>
        <div className="user-input__controls">
          <TextField
            type="number"
            fullWidth
            label="Age(Years)"
            value={enteredAge}
            onChange={whenAgeAdded}
          />
        </div>
        <ButtonUI  />
      </form>
    </div>
  );
}

// const Palette = () => {
//   // const CssButtonField = styled(Button)({
//   //   ".MuiButton-root": {
//   //     borderRadius: "15px",
//   //   },
//   // });
//   return (
//   );
// };
export default User;
