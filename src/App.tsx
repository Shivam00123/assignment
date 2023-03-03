import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallary from "./components/Gallary";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Todo from "./components/Todo";
import UserInfo from "./components/UserInfo";
import { fetchUsers } from "./redux/Users/actions";

function App() {
  const dispatch = useDispatch();

  // used it here so we can fetch users in every page

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
