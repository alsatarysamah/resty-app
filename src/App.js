import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import NavbarResty from "./components/navbar/navbar";
import Signin from "./components/Signin";

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
            <Route path="/signin" element={<Signin/>} />
            {/* <Route path="/signup" element={<Signup />} /> */}



          </Routes>
      </main>
      <footer bg="dark" variant="dark">
        <div className="text-center">All right is reserved</div>
      </footer>
    </div>
  );
}

export default App;
