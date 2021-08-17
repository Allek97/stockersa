import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import "./App.scss";

import StockPage from "./pages/stockPage/StockPage";
import Homepage from "./pages/homepage/HomePage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Homepage />} />
                <Route exact path="/stocks" render={() => <StockPage />} />
            </Switch>
        </Router>
    );
}

export default App;
