import React, { useEffect } from "react";
import axios from "axios";

import "./App.scss";

import Graph from "./components/graph/Graph";
import { getDailyStockForSymbolTiingo } from "./utils/StockApiConnectorTiingo";

function App() {
    useEffect(async () => {
        try {
            const res = await getDailyStockForSymbolTiingo(
                "TSLA",
                "2021-06-01",
                "2021-06-09"
            );
            // const res = await axios.get(
            //     "https://api.tiingo.com/tiingo/daily/TSLA"
            // );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <div
            style={{
                height: "100vh",
                backgroundColor: "#1f2033",
            }}
        >
            <div
                style={{
                    padding: "5rem 8rem 0 3rem",
                }}
            >
                <Graph />
            </div>
        </div>
    );
}

export default App;
