import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import ButtonAppBar from './Menu';


function App() {
  return (
    <div className="App">
      <ButtonAppBar>
      </ButtonAppBar>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chats" element={<Chats />} />
    </Routes>
    </div>
  );
};

export default App;