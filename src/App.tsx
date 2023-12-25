import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./pages/CreateUser";
import Header from "./components/Header";
import EditUserDetail from "./pages/EditUserDetail";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={UserList} />
        <Route path="/create" Component={CreateUser} />
        <Route path="/edit/:id" Component={EditUserDetail} />
      </Routes>
    </BrowserRouter>
  );
}
