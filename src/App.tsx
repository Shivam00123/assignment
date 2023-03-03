import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallary from "./components/Gallary";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Todo from "./components/Todo";
import UserInfo from "./components/UserInfo";

function App() {
  let baseUrl = import.meta.env.VITE_URL;
  console.log({ baseUrl });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserInfo />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
