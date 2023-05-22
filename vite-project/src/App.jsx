// import TodoApp from './todo-list'
// import Practice from './practice/practice'
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Axios from "axios"
import Create from "./component/create.component";
import Edit from "./component/edit.component";
import Gallery from "./component/gallery.component";

function App() {
  return (
    <div className="container">
      <nav className="bg-sky-500 w-full text-2xl flex justify-between items-center mx-auto px-4 ">
        <Link to={"/"} className="">
          React CRUD Example
        </Link>
        <div className="" id="navbarSupportedContent">
          <ul className="flex mx-auto">
            <li className="p-4">
              <Link to={"/"} className="">
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to={"/create"} className="">
                Create
              </Link>
            </li>
            <li className="p-4">
              <Link to={"/gallery"} className="">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>{" "}
      <br />
      <h2>Welcome to React CRUD Tutorial</h2> <br />
      <Routes>
        <Route exact path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </div>
  );
  // <Practice></Practice>
}
export default App;
