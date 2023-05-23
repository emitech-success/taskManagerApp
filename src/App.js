import { Route, Routes } from "react-router-dom";

import React from "react";
import TodoDetails from "./TodoDetails";
import Todoist from "./Todoist";

// import React, { Component } from 'react'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route index element={<Todoist />} />
        <Route path=":todo_id" element={<TodoDetails />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
