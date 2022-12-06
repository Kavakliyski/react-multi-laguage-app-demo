import { Suspense } from "react";
import "./App.css"


// pages
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Demo } from "./pages/Demo";

import i18n from "./i18n";                  // must have this to work

function App() {

    return (

        <Suspense fallback={null}>
            <Header />
            <Home />
            <Demo />
        </Suspense>

    );
}

export default App;
