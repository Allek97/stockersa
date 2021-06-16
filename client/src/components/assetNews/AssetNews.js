import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
    NewsContainer,
    NewsContent,
    NewsTitle,
    NewsImage,
    NewsRow,
    SiteWeb,
    StockSymbol,
    Title,
} from "./style/AssetNewsStyle";

import { dateLastRefresh } from "../../utils/DateFunctions";
import { getAssetNewsFMP } from "../../utils/StockApiConnectorFMP";

export default function AssetNews({ ticker }) {
    const [assetNews, setAssetNews] = useState([]);
    const [isApiConsumed, setIsApiConsumed] = useState(false);

    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetNewsFMP(ticker, 6);
                const { data, status } = res;
                console.log(res, ticker);
                console.log(data, data.length, isApiConsumed);
                if (status === 200 && data.length > 0) {
                    setAssetNews(data);
                    setIsApiConsumed(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            setAssetNews([]);
            setIsApiConsumed(false);
        };
    }, [ticker]);
    return (
        <>
            {isApiConsumed && (
                <div>
                    <NewsContainer>
                        <Title>In the news</Title>
                        {assetNews.map((news) => (
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
                                            <StockSymbol>
                                                {news.symbol}
                                            </StockSymbol>
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
            )}
        </>
    );
}

AssetNews.propTypes = {
    ticker: PropTypes.string.isRequired,
};
