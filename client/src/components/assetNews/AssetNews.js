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
    getLatestNewsFMP,
} from "../../utils/apis/StockApiConnectorFMP";

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
                const res = await getLatestNewsFMP(6);
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
        <NewsContainer>
            <div>
                <Title>
                    {isRelatedNews
                        ? `News related to ${assetName}`
                        : `Latest News in the market`}
                </Title>
                <div>
                    <NewsBtn
                        isRelatedNews={isRelatedNews ? 1 : 0}
                        selected={isRelatedNews}
                        onClick={() => {
                            setIsRelatedNews(true);
                        }}
                        style={{
                            marginRight: "1rem",
                            marginLeft: "1rem",
                        }}
                    >
                        Related News
                    </NewsBtn>
                    <NewsBtn
                        isRelatedNews={!isRelatedNews ? 1 : 0}
                        selected={!isRelatedNews}
                        onClick={() => {
                            setIsRelatedNews(false);
                        }}
                    >
                        Lastest News
                    </NewsBtn>
                </div>
            </div>

            {isNewsApiConsumed &&
                isLatestNewsApiConsumed &&
                newsType().map((news) => (
                    <NewsRow
                        key={`${news.title},${news.symbol},${news.site},${news.publishedDate}`}
                    >
                        <div className="news-info">
                            <div>
                                <SiteWeb>{news.site} </SiteWeb>
                                <span
                                    style={{
                                        fontSize: "1.3rem",
                                        color: "#a5a5b1",
                                        marginRight: "1rem",
                                    }}
                                >
                                    {dateLastRefresh(news.publishedDate)}
                                </span>
                                <StockSymbol>{news.symbol}</StockSymbol>
                            </div>
                            <div>
                                <NewsTitle
                                    onClick={() => {
                                        window.open(`${news.url}`, "_blank");
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
                        <div className="news-thumbnail">
                            <NewsImage
                                src={`${news.image}`}
                                alt="news thumbnail"
                                onClick={() => {
                                    window.open(`${news.url}`, "_blank");
                                }}
                            />
                        </div>
                    </NewsRow>
                ))}
        </NewsContainer>
    );
}

AssetNews.propTypes = {
    ticker: PropTypes.string.isRequired,
    assetName: PropTypes.string.isRequired,
};
