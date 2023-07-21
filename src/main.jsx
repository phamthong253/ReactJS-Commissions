import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./component/auth/AuthProvider.component";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App className="bg-gradient-to-r from-indigo-200 via-purple-200 to-sky-200" />
    </AuthProvider>
  </BrowserRouter>
);
