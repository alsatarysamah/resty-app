import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavbarResty from "./components/Navbar/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "react-toastify/dist/ReactToastify.css";
import History from "./components/History/History";

function App() {
  return (
    <div className="d-flex flex-column site">
      <header>
        <NavbarResty />
      </header>
      <main>
        {/* <Home/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />

        </Routes>
      </main>
      <footer bg="dark" variant="dark">
        <div className="text-center">All right is reserved</div>
      </footer>
    </div>
  );
}

export default App;
