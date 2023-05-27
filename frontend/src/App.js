import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { fetchUser } from "./utils/fetchUser";

import Home from "./container/Home";
import Login from "./container/Login";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate("/login");
  }, [navigate]);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
