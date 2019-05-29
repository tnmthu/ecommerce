import React from "react";
import "./App.css";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
