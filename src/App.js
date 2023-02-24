import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import CollapsibleNavBar from "./components/Navbar/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "react-toastify/dist/ReactToastify.css";
import HistoryScreen from "./components/HistoryScreen/HistoryScreen";
import { ToastContainer } from "react-bootstrap";
import UserTable from "./components/UserTable/UserTable";

function App() {
  return (
    <div className="d-flex flex-column site">
      <ToastContainer
        position="top-center"
        style={{ width: "200px", height: "100px" }}
      />

      <header>
        <CollapsibleNavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/users" element={<UserTable />} />

        </Routes>
      </main>
      <footer bg="dark" variant="dark">
        <div className="text-center">All right is reserved</div>
      </footer>
    </div>
  );
}

export default App;
