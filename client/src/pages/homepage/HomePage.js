import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";

import "./_homepage.scss";

import {
    HomeNavBar,
    StockBtn,
    LogoName,
    Tag,
    HeroArticle,
    ResponsiveArticle,
} from "./HomePageStyle";
import Loading from "../../components/loading/PageLoading";
import RotatingAssets from "../../components/rotatingAssets/RotatingAssets";
import StocksList from "../../components/stocksList/StocksList";
import Footer from "../../components/footer/Footer";

import { ReactComponent as LogoSvg } from "../../assets/svgs/asset-white-3.svg";
import { ReactComponent as HeroSvg } from "../../assets/svgs/hero_stocks.svg";
import ExchangesSvg from "../../assets/svgs/StockExchangesSvg";
import phoneAppExpenses from "../../assets/imgs/phone-app-expenses-right.png";
import phoneAppStocks from "../../assets/imgs/phone-app-stock.png";

const HomePage = () => {
    const isSmallPhone = useMediaQuery({ query: `(max-width: 22.5em )` });
    const isTabLand = useMediaQuery({ query: `(max-width: 56.25em )` });
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
                                {!isSmallPhone && (
                                    <LogoName>stockersa</LogoName>
                                )}
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

                            <HeroSvg />
                        </HeroArticle>
                        <RotatingAssets />
                    </div>
                </section>

                <section className="app-section">
                    <ResponsiveArticle>
                        <img
                            src={isTabLand ? phoneAppStocks : phoneAppExpenses}
                            alt="app"
                        />
                        <div>
                            <Tag>Responsive App</Tag>

                            <h1>
                                Enjoy learning about stocks in a visually
                                animated responsive app.
                            </h1>

                            <h3>
                                Enchance your stock market finance knowledge
                                with our data that goes up to{" "}
                                <span>5 years </span> back in history.
                            </h3>
                            <h3>
                                Learn all about companies financial and expense
                                statements with our
                                <span> visually animated charts </span>. It
                                comes with important metrics that will help you
                                make wise investment decisions.
                            </h3>

                            <h3>
                                Get the latest news concerning your stocks and
                                the global market while having access to the
                                companies daily key statistics and overall
                                profile.
                            </h3>
                            <h3>
                                The application is fully responsive and in
                                constant improvement, new additions are coming
                                soon. Stay tuned.
                            </h3>
                        </div>
                    </ResponsiveArticle>
                </section>

                <section className="stocks-section">
                    <div className="stocks-section__container">
                        <h1>
                            <span>15000+ </span>
                            Stocks with tons of data all around the globe
                        </h1>
                        <h3>
                            Powered by financial modeling prep API, it supports
                            over 15000 stocks across multiple exchanges. Whole
                            U.S. market, XETRA, EURONEX, TSX, SEDAR, SEHK and
                            more.
                        </h3>
                        <StocksList />
                    </div>
                </section>

                <section className="exchanges-section">
                    <div className="exchanges-section__container">
                        <h1>
                            Covering <span>40+</span> Global Exchanges all over
                            the world
                        </h1>
                        <h3>
                            Track all the stocks exchanges around the globe. Get
                            access to all the necessary informations about them
                            with one click in our google map.
                        </h3>
                        <ExchangesSvg />
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default HomePage;
