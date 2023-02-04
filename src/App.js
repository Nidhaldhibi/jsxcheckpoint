import "./App.css";

import React from "react";
import ProfilePhoto from "./component/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";

function App() {
  return (
    <>
    <div className="App">
      <div className="Photo">
      <ProfilePhoto />
        <div className="Name">
      <FullName />
      <div className="Adress">
      <Address />
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
