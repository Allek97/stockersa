import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import { animateSCroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
import ScrollAnimation from "react-animate-on-scroll";

import "./_homepage.scss";

import {
    HeroSection,
    StocksSection,
    ExchangesSection,
    HomeNavBar,
    StockBtn,
    LogoName,
    Tag,
    HeroArticle,
    AppSection,
    ResponsiveArticle,
} from "./HomePageStyle";
import Loading from "../../components/loading/PageLoading";
import RotatingAssets from "../../components/rotatingAssets/RotatingAssets";
import StocksList from "../../components/stocksList/StocksList";
import Footer from "../../components/footer/Footer";

import onScreenIntersection from "../../utils/onScreenIntersection";

import { ReactComponent as LogoSvg } from "../../assets/svgs/asset-white-3.svg";
import { ReactComponent as HeroSvg } from "../../assets/svgs/hero_stocks.svg";
import ExchangesSvg from "../../assets/svgs/StockExchangesSvg";
import phoneAppExpenses from "../../assets/imgs/phone-app-expenses-right.png";
import phoneAppStocks from "../../assets/imgs/phone-app-stock.png";

const HomePage = () => {
    const isSmallPhone = useMediaQuery({ query: `(max-width: 22.5em )` });
    const isTabLand = useMediaQuery({ query: `(max-width: 56.25em )` });

    //NOTE: To not delay animations, i need to load the homepage component after the loading
    const loadTime = 800;
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadTimeout = setTimeout(() => {
            setIsLoaded(true);
        }, loadTime - 100);
        return () => {
            clearTimeout(loadTimeout);
        };
    }, []);
    ////////////////////////////////
    // NOTE: SCROLL ANIMATIONS
    ////////////////////////////////

    // App section
    const appArticleRef = useRef();
    const app3dMockRef = useRef();
    const appArticleThreshold = isTabLand ? -30 : -100;
    const appArticleView = onScreenIntersection(
        appArticleRef,
        appArticleThreshold,
        false,
        10
    );
    const app3dMockupView = onScreenIntersection(app3dMockRef, -100, false, 10);
    // Stocks section
    const stocksTextRef = useRef();
    const stocksListRef = useRef();
    const stocksTextView = onScreenIntersection(stocksTextRef, -100, false, 10);
    const stocksListView = onScreenIntersection(stocksListRef, -50, true, 10);
    // Exchanges section
    const exchangesTextRef = useRef();
    const exchangesListRef = useRef();
    const exchangesTextView = onScreenIntersection(
        exchangesTextRef,
        -100,
        false,
        10
    );
    const exchangesListView = onScreenIntersection(
        exchangesListRef,
        -50,
        true,
        10
    );

    return (
        <>
            <Loading loadingTime={loadTime} />

            {isLoaded && (
                <div className="homepage">
                    <HeroSection>
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
                                        Access real-time stock data, market news
                                        and more.
                                    </h1>
                                    <h3>
                                        Supports over 15000 stocks across
                                        multiple exchanges mainly exploiting
                                        financial modeling prep API.
                                    </h3>
                                    <h3>
                                        The visualization charts in this app
                                        have been built using Recharts react
                                        library and airbnb visx.
                                    </h3>

                                    <h3>
                                        Google map api has been leveraged to
                                        build a map that tracks listed stock
                                        exchanges around the globe and stock
                                        companies headquarters.
                                    </h3>
                                </div>

                                <HeroSvg />
                            </HeroArticle>
                            <RotatingAssets />
                        </div>
                    </HeroSection>

                    <AppSection>
                        <ResponsiveArticle
                            animate3dMockUp={app3dMockupView}
                            animateArticle={appArticleView}
                            isTabLand={isTabLand}
                        >
                            <img
                                ref={app3dMockRef}
                                src={
                                    isTabLand
                                        ? phoneAppStocks
                                        : phoneAppExpenses
                                }
                                alt="app"
                            />

                            <div ref={appArticleRef}>
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
                                    Learn all about companies financial and
                                    expense statements with our
                                    <span> visually animated charts </span>. It
                                    comes with important metrics that will help
                                    you make wise investment decisions.
                                </h3>

                                <h3>
                                    Get the latest news concerning your stocks
                                    and the global market while having access to
                                    the companies daily key statistics and
                                    overall profile.
                                </h3>
                                <h3>
                                    The application is fully responsive and in
                                    constant improvement, new additions are
                                    coming soon. Stay tuned.
                                </h3>
                            </div>
                        </ResponsiveArticle>
                    </AppSection>

                    <StocksSection
                        animateText={stocksTextView}
                        animateList={stocksListView}
                        isTabLand={isTabLand}
                    >
                        <div>
                            <div ref={stocksTextRef}>
                                <h1>
                                    <span>15000+ </span>
                                    Stocks with tons of data all around the
                                    globe
                                </h1>
                                <h3>
                                    Powered by financial modeling prep API, it
                                    supports over 15000 stocks across multiple
                                    exchanges. Whole U.S. market, XETRA,
                                    EURONEX, TSX, SEDAR, SEHK and more.
                                </h3>
                            </div>
                            <StocksList reference={stocksListRef} />
                        </div>
                    </StocksSection>

                    <ExchangesSection
                        animateText={exchangesTextView}
                        animateList={exchangesListView}
                        isTabLand={isTabLand}
                    >
                        <div>
                            <div ref={exchangesTextRef}>
                                <h1>
                                    Covering <span>40+</span> Global Exchanges
                                    all over the world
                                </h1>
                                <h3>
                                    Track all the stocks exchanges around the
                                    globe. Get access to all the necessary
                                    informations about them with one click in
                                    our google map.
                                </h3>
                            </div>
                            <div ref={exchangesListRef}>
                                <ExchangesSvg />
                            </div>
                        </div>
                    </ExchangesSection>

                    <Footer />
                </div>
            )}
        </>
    );
};

export default HomePage;

// NOTE: A MORE MANUEL WAY TO DO SCROLL ANIMATIONS // PERFORMANCE ISSUES

// const [animateAppSection, setAnimateAppSection] = useState(false);
// const appSectionRef = useRef(null);

// function onAppSectionScroll() {
//     const topPosition = appSectionRef.current.getBoundingClientRect().top;
//     const scrollPosition = window.scrollY + window.innerHeight;

//     console.log(scrollPosition, topPosition + 800);
//     if (topPosition < scrollPosition - 300) {
//         setAnimateAppSection(true);
//     }
// }

// function debounce(method, delay) {
//     clearTimeout(method._tId);
//     method._tId = setTimeout(function () {
//         method();
//     }, delay);
// }

// useEffect(() => {
//     window.addEventListener("scroll", () =>
//         debounce(onAppSectionScroll, 20)
//     );
//     return () =>
//         window.removeEventListener("scroll", () =>
//             debounce(onAppSectionScroll, 20)
//         );
// }, []);
