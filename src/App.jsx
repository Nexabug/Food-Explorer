import Home from "./pages/homepage/Home";
import "./App.css";
import About from "./pages/aboutpage/About";
import Login from "./pages/loginpage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AppLayout from "./layout/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";

function App() {
  const [cities, setcities] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    async function getCities() {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setcities(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    getCities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="/app" element={<AppLayout />}>
          <Route
            path="cities"
            element={<CityList cities={cities} isloading={isloading} />}
          />
          <Route
            path="country"
            element={<CountryList cities={cities} isloading={isloading} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
