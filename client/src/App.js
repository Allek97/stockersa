import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import "./App.scss";

import StockPage from "./pages/stockPage/StockPage";

function App() {
    return (
        <div>
            <StockPage />
        </div>
    );
}

export default App;
