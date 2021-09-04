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
import Footer from "../../components/footer/Footer";
// import UsePlaces from "../../components/maps/components/UsePlaces";

import { ReactComponent as LogoSvg } from "../../assets/svgs/asset.svg";
// import { ReactComponent as Computer } from "../../assets/svgs/computer.svg";

import { LogoName, AssetInfoStyle, Btn } from "./StockPageStyle";

import "./_stockPage.scss";

export default function StockPage() {
    const [dataPeriod, setDataPeriod] = useState("1Y");
    const [ticker, setTicker] = useState("FB");
    const [assetName, setAssetName] = useState("Searching...");
    const [assetAddress, setAssetAddress] = useState("");
    const [isFMPApiConsumed, setIsFMPApiConsumed] = useState(false);

    // Utilisee pour calculer les ratios
    const [startClose, setStartClose] = useState();
    const [lastClose, setLastClose] = useState();

    const [lastDate, setLastDate] = useState("");

    return (
        <>
            <Loading loadingTime={800} />
            <div className="stockpage">
                <header className="stockpage-header">
                    <a href="/">
                        <div>
                            <LogoSvg
                                style={{
                                    height: "4.3rem",
                                    width: "4.3rem",
                                }}
                            />

                            <LogoName>Stockersa</LogoName>
                        </div>
                    </a>
                    <AssetSearch setTicker={setTicker} />
                    <Btn to="/">Homepage</Btn>
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
                            isFMPApiConsumed={isFMPApiConsumed}
                            setIsFMPApiConsumed={setIsFMPApiConsumed}
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

                        <AssetKeyInfo
                            ticker={ticker}
                            setAssetAddress={setAssetAddress}
                        />

                        {/* <Computer /> */}
                        {/* <img
                            src="https://app.brandmark.io/v3/img/logo-preview/mac.png"
                            alt="pc"
                            style={{
                                height: "100rem",
                            }}
                        /> */}
                    </section>

                    <section className="stockpage-main__map">
                        <StockMap
                            assetName={assetName}
                            assetAddress={assetAddress}
                        />
                        {/* <UsePlaces /> */}
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
