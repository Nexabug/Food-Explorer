import Home from "./pages/homepage/Home";
import "./App.css";
import About from "./pages/aboutpage/About";
import Login from "./pages/loginpage/Login";
import { BrowserRouter, data, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AppLayout from "./layout/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import { createContext, useEffect, useReducer, useState } from "react";
import Detail from "./components/Detail";
import Form from "./components/Form";
const initialState = {
  id: Date.now(),
  name: "",
  time: null,
  date: null,
  notes: "",
  position: {},
  country: "",
  city: "",
};

function CityReducer(state, action) {
  switch (action.type) {
    case "addCity":
      return [...state, action.payload];
    case "deletecity":
      const newstate = state.filter((item) => item.id !== action.payload);
      return newstate;
    case "removeAll":
      return [];
    default:
      return state;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "time":
      return { ...state, time: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "notes":
      return { ...state, notes: action.payload };
    case "position":
      return { ...state, position: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "country":
      return { ...state, country: action.payload };

    case "reset":
      return {
        ...initialState,
        id: Date.now(),
      };
    default:
      return state;
  }
}
function initCityList() {
  const storedData = localStorage.getItem("city");

  if (!storedData || storedData === "undefined" || storedData === "null") {
    return [];
  }
  return JSON.parse(storedData);
}
export const Context = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cityListState, dispatchCity] = useReducer(
    CityReducer,
    [],
    initCityList,
  );

  useEffect(() => {
    localStorage.setItem("city", JSON.stringify(cityListState));
  }, [cityListState]);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        cityListState,
        dispatchCity,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<Detail />} />
            <Route path="country" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
