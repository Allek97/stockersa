import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "./App.scss";

import Loading from "./components/loading/PageLoading";
import Graph from "./components/graph/Graph";
import ButtonSwitch from "./components/periodSwitch/PeriodSwitch";
import AssetSearch from "./components/assetSearch/AssetSearch";
import AssetInfo from "./components/assetInfo/AssetInfo";
import AssetKeyInfo from "./components/assetKeyInfo/AssetKeyInfo";

function App() {
    const [dataPeriod, setDataPeriod] = useState("1Y");
    const [ticker, setTicker] = useState("FB");
    const [isTiingoApiConsumed, setIsTiingoApiConsumed] = useState(false);

    // Utilisee pour calculer les ratios
    const [startClose, setStartClose] = useState();
    const [lastClose, setLastClose] = useState();

    const [lastDate, setLastDate] = useState("");

    return (
        <>
            {!isTiingoApiConsumed && <Loading loadingTime={10000} />}
            <div
                style={{
                    // height: "100vh",
                    backgroundColor: "#1f2033",
                }}
            >
                <main
                    style={{
                        padding: "2rem 5rem 0 5rem",
                    }}
                >
                    <div
                        style={{ width: "max-content", margin: "0 auto 10rem" }}
                    >
                        <AssetSearch setTicker={setTicker} />
                    </div>
                    <div
                        style={{
                            padding: "3rem",
                            marginBottom: "5rem",
                            boxShadow: "var(--shadow-dark)",
                            border: "1px solid #142d69",
                            borderRadius: "3rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "5rem",
                            }}
                        >
                            <AssetInfo
                                ticker={ticker}
                                dataPeriod={dataPeriod}
                                startClose={startClose}
                                lastClose={lastClose}
                                lastDate={lastDate}
                            />
                            <ButtonSwitch setDataPeriod={setDataPeriod} />
                        </div>
                        <Graph
                            dataPeriod={dataPeriod}
                            isTiingoApiConsumed={isTiingoApiConsumed}
                            setIsTiingoApiConsumed={setIsTiingoApiConsumed}
                            ticker={ticker}
                            setStartClose={setStartClose}
                            setLastClose={setLastClose}
                            setLastDate={setLastDate}
                        />
                    </div>
                    <AssetKeyInfo />
                </main>
            </div>
        </>
    );
}

export default App;
