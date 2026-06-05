import Home from "./pages/homepage/Home";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="h">
      <div className="body">
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
