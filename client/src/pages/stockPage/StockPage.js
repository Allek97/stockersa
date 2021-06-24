import React, { useState } from "react";
import styled from "styled-components";

import Loading from "../../components/loading/PageLoading";
import Graph from "../../components/graph/Graph";
import ButtonSwitch from "../../components/periodSwitch/PeriodSwitch";
import AssetSearch from "../../components/assetSearch/AssetSearch";
import AssetInfo from "../../components/assetInfo/AssetInfo";
import AssetKeyInfo from "../../components/assetKeyInfo/AssetKeyInfo";
import AssetNews from "../../components/assetNews/AssetNews";
import AssetFinance from "../../components/assetFinance/AssetFinanace";

import { ReactComponent as LogoSvg } from "../../assets/svg/asset.svg";

const LogoName = styled.span`
    margin-left: 1.5rem;

    /* background-image: linear-gradient(to right, #18acea, #cb3d8a, #084698);
     */

    background-image: linear-gradient(to left, #18acea, #084698);

    background-clip: text;
    -webkit-background-clip: text;

    font-size: 2.4rem;
    font-weight: 600;
    color: transparent;
`;

export default function StockPage() {
    const [dataPeriod, setDataPeriod] = useState("1Y");
    const [ticker, setTicker] = useState("FB");
    const [assetName, setAssetName] = useState("Searching...");
    const [isTiingoApiConsumed, setIsTiingoApiConsumed] = useState(false);

    // Utilisee pour calculer les ratios
    const [startClose, setStartClose] = useState();
    const [lastClose, setLastClose] = useState();

    const [lastDate, setLastDate] = useState("");

    return (
        <>
            <Loading loadingTime={1500} />
            <div
                style={{
                    // height: "100vh",
                    backgroundColor: "#1f2033",
                    padding: "2rem 5rem 5rem 5rem",
                }}
            >
                <header style={{ display: "flex", alignItems: "flex-start" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                height: "4.3rem",
                                width: "4.3rem",
                            }}
                        >
                            <LogoSvg />
                        </div>
                        <LogoName>Stockersa</LogoName>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "max-content",
                            margin: "0 auto 10rem",
                        }}
                    >
                        <AssetSearch setTicker={setTicker} />
                    </div>
                </header>
                <main>
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
                                assetName={assetName}
                                setAssetName={setAssetName}
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
                            setAssetName={setAssetName}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "5rem",
                        }}
                    >
                        <div>
                            <AssetNews ticker={ticker} assetName={assetName} />
                            <AssetFinance ticker={ticker} />
                        </div>
                        <AssetKeyInfo ticker={ticker} />
                    </div>
                </main>
            </div>
        </>
    );
}
