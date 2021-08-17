import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

import "./_homepage.scss";

import {
    HomeNavBar,
    StockBtn,
    LogoName,
    HeroArticle,
    Tag,
} from "./HomePageStyle";
import Loading from "../../components/loading/PageLoading";
import RotatingAssets from "../../components/rotatingAssets/RotatingAssets";

import { ReactComponent as LogoSvg } from "../../assets/svgs/asset-white-3.svg";
import { ReactComponent as HeroSvg } from "../../assets/svgs/hero_stocks.svg";
import ExchangesSvg from "../../assets/svgs/StockExchangesSvg";

import exchangesMapImg from "../../assets/imgs/Stock_Exchanges_Map_2.PNG";

const HomePage = () => {
    return (
        <>
            <Loading loadingTime={800} />
            <div className="homepage">
                <section className="hero-section">
                    <div className="hero-section__container">
                        <HomeNavBar>
                            <Link to="/">
                                <LogoSvg
                                    style={{
                                        height: "4.3rem",
                                        width: "4.3rem",
                                    }}
                                />
                                <LogoName>stockersa</LogoName>
                            </Link>
                            <StockBtn to="/stocks">
                                Search Stock Tickers
                                <HiArrowNarrowRight />
                            </StockBtn>
                        </HomeNavBar>

                        <HeroArticle>
                            <div>
                                <Tag>Stock Data</Tag>

                                <h1>
                                    Access real-time stock data, market news and
                                    more.
                                </h1>
                                <h3>
                                    Supports over 15000 stocks across multiple
                                    exchanges mainly exploiting financial
                                    modeling prep API.
                                </h3>
                                <h3>
                                    The visualization charts in this app have
                                    been built using Recharts react library and
                                    airbnb visx.
                                </h3>

                                <h3>
                                    Google map api has been leveraged to build a
                                    map that tracks listed stock exchanges
                                    around the globe and stock companies
                                    headquarters.
                                </h3>
                            </div>
                            <div>
                                <HeroSvg />
                            </div>
                        </HeroArticle>
                        <RotatingAssets />
                    </div>
                </section>

                <section className="exchanges-section">
                    <div className="exchanges-section__container">
                        <h1>Covering more than 40 Global Exchanges</h1>
                        <h3>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Minus minima neque adipisci facilis vero non
                            expedita, quos,
                        </h3>
                        <ExchangesSvg />
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
