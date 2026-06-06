import Home from "./pages/homepage/Home";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/aboutpage/About";

function App() {
  return (
    <div className="h">
      <div className="body">
        <Nav />
        <About />
      </div>
    </div>
  );
}

export default App;
