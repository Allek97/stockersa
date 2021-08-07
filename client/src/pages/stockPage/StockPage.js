import React, { useState } from "react";

import Loading from "../../components/loading/PageLoading";
import Graph from "../../components/graph/Graph";
import ButtonSwitch from "../../components/periodSwitch/PeriodSwitch";
import AssetSearch from "../../components/assetSearch/AssetSearch";
import AssetInfo from "../../components/assetInfo/AssetInfo";
import AssetKeyInfo from "../../components/assetKeyInfo/AssetKeyInfo";
import AssetNews from "../../components/assetNews/AssetNews";
import AssetFinance from "../../components/assetFinance/AssetFinance";
import StockMap from "../../components/maps/StockMap";
import UsePlaces from "../../components/maps/components/UsePlaces";

import { ReactComponent as LogoSvg } from "../../assets/svgs/asset.svg";
// import { ReactComponent as Computer } from "../../assets/svgs/computer.svg";

import { LogoName, AssetInfoStyle } from "./StockPageStyle";

import "./_stockPage.scss";

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
            <div className="stockpage">
                <header className="stockpage-header">
                    <div>
                        <LogoSvg
                            style={{
                                height: "4.3rem",
                                width: "4.3rem",
                            }}
                        />

                        <LogoName>Stockersa</LogoName>
                    </div>
                    <nav>
                        <AssetSearch setTicker={setTicker} />
                    </nav>
                </header>

                <main className="stockpage-main">
                    <section className="stockpage-main__price">
                        <AssetInfoStyle>
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
                        </AssetInfoStyle>
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
                    </section>
                    <section className="stockpage-main__news-finance">
                        <div>
                            <AssetNews ticker={ticker} assetName={assetName} />
                            <AssetFinance ticker={ticker} />
                        </div>

                        <AssetKeyInfo ticker={ticker} />

                        {/* <Computer /> */}
                        {/* <img
                            src="https://app.brandmark.io/v3/img/logo-preview/mac.png"
                            alt="pc"
                            style={{
                                height: "100rem",
                            }}
                        /> */}
                    </section>
                    {/* <section
                        className="stockpage-main__map"
                        style={{ marginBottom: "5rem" }}
                    >
                        <div>
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontSize: "3rem",
                                    padding: "1rem",
                                    color: "white",
                                }}
                            >
                                Stock exchanges around the world
                            </h1>
                        </div>
                    </section> */}
                    <section className="stockpage-main__map">
                        <StockMap />
                        {/* <UsePlaces /> */}
                    </section>
                </main>
            </div>
        </>
    );
}
