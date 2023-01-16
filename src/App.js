import "./App.css";
import Home from "./components/home/home";
import NavbarResty from "./components/navbar/navbar";

function App() {
  return (
    <div className="d-flex flex-column site">
      <header>
        <NavbarResty />
      </header>
      <main>
        <Home/>
      </main>
      <footer bg="dark" variant="dark">
        <div className="text-center">All right is reserved</div>
      </footer>
    </div>
  );
}

export default App;
