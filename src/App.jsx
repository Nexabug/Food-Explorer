import Home from "./pages/homepage/Home";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/aboutpage/About";
import Login from "./pages/loginpage/Login";

function App() {
  return (
    <div className="h">
      <div className="body">
        <Nav />
        <Login />
      </div>
    </div>
  );
}

export default App;
