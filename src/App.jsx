// import TodoApp from './todo-list'
// import Practice from './practice/practice'
import { Route, Routes } from "react-router-dom";
import Create from "./component/create/create.component";
import Gallery from "./component/gallery/gallery.component";
import Profile from "./component/user/userProfile.component";
import Home from "./component/home/home.component";
import Edit from "./component/edit/edit.component";
import Signup from "./component/user/signup.component";
import Signin from "./component/user/signin.component";
import "./interceptor/axios";
import Manage from "./component/manageUser/manage.component";
import ProtectedRoute from "./component/auth/ProtectedRoute";
import ArtistComm from "./component/user/artistComm";
import UserArtist from "./component/user/userArtist.component";
import ForArtist from "./component/home/forArtist.component";

function App() {
  return (
    <Routes>
      {/* Dành cho public  */}
      <Route exact path="signin" element={<Signin />} />
      <Route exact path="signup" element={<Signup />} />
      <Route exact path="/for-artist" element={<ForArtist />} />
      <Route exact path="/artist" element={<UserArtist />} />
      <Route path="artist/:id" element={<ArtistComm />} />
      <Route path="/" index element={<Home />} />
      {/* Dành cho admin roles */}
      <Route element={<ProtectedRoute allowedRoles={true} />} >
        <Route path="/manageUser" element={<Manage />}  />
        <Route path="manageUser/:id" element={<Manage />} />
      </Route>
      {/* Dành cho user roles */}
      <Route element={<ProtectedRoute allowedRoles="User" />} >  
        <Route exact path="/create" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
  // <Practice></Practice>
}
export default App;
