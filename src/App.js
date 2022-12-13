import { Suspense } from "react";
import "./App.css"


// pages
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Demo } from "./pages/Demo";

import i18n from "./i18n";                  // must have this to work

import { Route, Routes } from "react-router-dom"

function App() {

    return (

        <Suspense fallback={null}>

            <Header />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/demo" element={<Demo />} />
            </Routes>

        </Suspense>

    );
}

export default App;
