import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
    NewsContainer,
    NewsContent,
    NewsTitle,
    NewsImage,
    NewsRow,
    NewsBtn,
    SiteWeb,
    StockSymbol,
    Title,
} from "./style/AssetNewsStyle";

import { dateLastRefresh } from "../../utils/DateFunctions";
import {
    getAssetNewsFMP,
    getAssetLatestNewsFMP,
} from "../../utils/StockApiConnectorFMP";

export default function AssetNews({ ticker, assetName }) {
    const [assetNews, setAssetNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [isRelatedNews, setIsRelatedNews] = useState(true);

    const [isNewsApiConsumed, setIsNewsApiConsumed] = useState(false);
    const [isLatestNewsApiConsumed, setIsLatestNewsApiConsumed] =
        useState(false);

    function newsType() {
        return isRelatedNews ? assetNews : latestNews;
    }

    // get news related to the asset
    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetNewsFMP(ticker, 6);
                const { data, status } = res;

                if (status === 200) {
                    setAssetNews(data);
                    setIsNewsApiConsumed(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            setAssetNews([]);
            setIsNewsApiConsumed(false);
        };
    }, [ticker]);

    // get the lastest news of the market
    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetLatestNewsFMP(6);
                const { data, status } = res;
                if (status === 200) {
                    setLatestNews(data);
                    setIsLatestNewsApiConsumed(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            setLatestNews([]);
            setIsLatestNewsApiConsumed(false);
        };
    }, [ticker]);

    return (
        <div>
            <NewsContainer style={{ marginBottom: "5rem" }}>
                <div style={{ display: "flex" }}>
                    <Title>
                        {isRelatedNews
                            ? `News related to ${assetName}`
                            : `Latest News in the market`}
                    </Title>
                    <NewsBtn
                        isRelatedNews={isRelatedNews}
                        selected={isRelatedNews}
                        onClick={() => {
                            setIsRelatedNews(true);
                        }}
                        style={{
                            marginLeft: "auto",
                            marginRight: "1rem",
                            backgroundColor: isRelatedNews
                                ? "#e8f0fe"
                                : "transparent",
                        }}
                    >
                        Related News
                    </NewsBtn>
                    <NewsBtn
                        isRelatedNews={isRelatedNews}
                        selected={!isRelatedNews}
                        onClick={() => {
                            setIsRelatedNews(false);
                        }}
                        style={{
                            marginRight: "2px",
                            marginLeft: "2px",
                            backgroundColor: !isRelatedNews
                                ? "#e8f0fe"
                                : "transparent",
                        }}
                    >
                        Lastest News
                    </NewsBtn>
                </div>

                {isNewsApiConsumed &&
                    isLatestNewsApiConsumed &&
                    newsType().map((news) => (
                        <NewsRow
                            key={`${news.title},${news.symbol},${news.site},${news.publishedDate}`}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div style={{ marginRight: "5rem" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <SiteWeb>{news.site} </SiteWeb>
                                        <span
                                            style={{
                                                fontSize: "1.3rem",
                                                color: "#a5a5b1",
                                            }}
                                        >
                                            {dateLastRefresh(
                                                news.publishedDate
                                            )}
                                        </span>
                                        <StockSymbol>{news.symbol}</StockSymbol>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <NewsTitle
                                            onClick={() => {
                                                window.open(
                                                    `${news.url}`,
                                                    "_blank"
                                                );
                                            }}
                                        >
                                            {news.title}
                                        </NewsTitle>
                                        <NewsContent>
                                            {news.text.substring(0, 300)}
                                            ...
                                        </NewsContent>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        overflow: "hidden",
                                        borderRadius: "1rem",
                                    }}
                                >
                                    <NewsImage
                                        src={`${news.image}`}
                                        alt="news thumbnail"
                                        onClick={() => {
                                            window.open(
                                                `${news.url}`,
                                                "_blank"
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </NewsRow>
                    ))}
            </NewsContainer>
        </div>
    );
}

AssetNews.propTypes = {
    ticker: PropTypes.string.isRequired,
    assetName: PropTypes.string.isRequired,
};
