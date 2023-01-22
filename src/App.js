import React, { useState } from "react";
import User from "./components/User/User";
import "./App.css";
import UserList from "./components/User List/UserList";
import AlertDialog from "./components/Alert Dialog/AlertDialog";

const dataObject = [];
let receivedNewData;
function App() {
  const [saveData, setSaveData] = useState(dataObject);
  const [openModal, setOpenModal] = useState(false);

  const collectSaveData = (receivedData) => {
    receivedNewData = receivedData;
    if (!openModal) {
      setSaveData((prevData) => {
        return [receivedData, ...prevData];
      });
    } else {
      return;
    }
    //setSaveData(dataObject.push(receivedData));
    // console.log(saveData)
    // dataObject.unshift(saveData)
    // console.log(dataObject);
  };
  const isModal = (open) => {
    setOpenModal(open);
  };

  if (saveData.length === 0) {
    return (
      <div className="main-div-flex">
        <User
          renderModal={isModal}
          onSaveData={collectSaveData}
          props={saveData}
        />
      </div>
    );
  }

  return (
    <div>
      {!openModal && (
        <div className="main-div-flex">
          <User
            renderModal={isModal}
            onSaveData={collectSaveData}
            props={dataObject}
          />
        </div>
      )}
      <div className="flexbox-Modal">
      {openModal && receivedNewData !== undefined ? <AlertDialog
            open={openModal}
            close={setOpenModal}
            age={receivedNewData}
          /> : <AlertDialog open={openModal} close={setOpenModal} age={0} />}
      </div>
      {(!openModal) ?
        <div className="inner-div-block">
          <UserList items={saveData} />
        </div>
      : <div></div>}
    </div>
  );
}

export default App;
