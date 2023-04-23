import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./componenets/UserList/UserList";
import UserProfile from "./componenets/UserProfile/UserProfile";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
