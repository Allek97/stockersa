import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
    getAssetInfoFMP,
    getAssetQuoteFMP,
} from "../../utils/apis/StockApiConnectorFMP";
import { nFormatter, convertCodeCountry } from "../../utils/UtilFunctions";

import {
    InfoContainer,
    InfoRow,
    KeyInfo,
    Title,
    LinkInfo,
} from "./style/AssetKeyInfoStyle";

export default function AssetKeyInfo(props) {
    const { ticker, setAssetAddress } = props;

    const [isInfoApiConsumed, setIsInfoApiConsumed] = useState(false);
    const [isQuoteApiConsumed, setIsQuoteApiConsumed] = useState(false);
    const [assetInfo, setAssetInfo] = useState([]);
    const [assetQuote, setAssetQuote] = useState([]);

    function rangeFormat(range) {
        if (range) {
            const p1 = parseFloat(range.split("-")[0]).toFixed(2);
            const p2 = parseFloat(range.split("-")[1]).toFixed(2);
            return `$${p1} - $${p2}`;
        }

        return `N/A`;
    }

    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetInfoFMP(ticker);

                const { status, data } = res;

                console.log(data[0]);
                if (status === 200) {
                    setAssetInfo(data[0]);
                    if (data[0].address) {
                        const fullAddress = `${data[0].address || ""}, ${
                            data[0].city || ""
                        } , ${data[0].state || ""} ${
                            convertCodeCountry(data[0].country.toUpperCase()) ||
                            ""
                        }
                        `;
                        console.log(fullAddress);
                        setAssetAddress(fullAddress);
                    } else {
                        setAssetAddress(
                            "Can't find the address of the current asset !"
                        );
                    }
                }

                setIsInfoApiConsumed(true);
            } catch (err) {
                console.log(err);
            }
        }

        fetchMyApi();

        return () => {
            setAssetInfo([]);
            setIsInfoApiConsumed(false);
        };
    }, [ticker]);

    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetQuoteFMP(ticker);

                const { status, data } = res;
                // console.log(res);

                if (status === 200) {
                    setAssetQuote(data[0]);
                }
                setIsQuoteApiConsumed(true);
            } catch (err) {
                console.log(err);
            }
        }

        fetchMyApi();

        return () => {
            setAssetQuote([]);
            setIsQuoteApiConsumed(false);
        };
    }, [ticker]);

    function teriaryAssetInfo(field) {
        if (assetInfo) {
            if (
                assetInfo[`${field}`] !== null &&
                assetInfo[`${field}`] !== "" &&
                assetInfo[`${field}`]
            ) {
                return "Valid";
            }
        }

        return "N/A";
    }
    // TODO: I could replace all this function with ||
    function teriaryAssetQuote(field) {
        if (assetQuote) {
            if (
                assetQuote[`${field}`] !== null &&
                assetQuote[`${field}`] !== ""
            ) {
                return "Valid";
            }
        }

        return "N/A";
    }

    return (
        <>
            {isInfoApiConsumed && isQuoteApiConsumed && (
                <div>
                    <InfoContainer style={{ marginBottom: "5rem" }}>
                        <Title>Key stats</Title>

                        <InfoRow>
                            <KeyInfo>previous close</KeyInfo>
                            <span>
                                {teriaryAssetQuote("previousClose") === "Valid"
                                    ? `$${assetQuote.previousClose.toFixed(2)}`
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>year range</KeyInfo>
                            <span>
                                {teriaryAssetInfo("range") === "Valid"
                                    ? rangeFormat(assetInfo.range)
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>day low</KeyInfo>
                            <span>
                                {teriaryAssetQuote("dayLow") === "Valid"
                                    ? `$${assetQuote.dayLow.toFixed(2)}`
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>day high</KeyInfo>
                            <span>
                                {teriaryAssetQuote("dayHigh") === "Valid"
                                    ? `$${assetQuote.dayHigh.toFixed(2)}`
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>market cap</KeyInfo>
                            <span>
                                {teriaryAssetQuote("marketCap") === "Valid"
                                    ? `${nFormatter(
                                          assetQuote.marketCap,
                                          2
                                      )} USD`
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>average volume</KeyInfo>
                            <span>
                                {teriaryAssetQuote("avgVolume") === "Valid"
                                    ? nFormatter(assetQuote.avgVolume, 2)
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>P/E ratio</KeyInfo>
                            <span>
                                {teriaryAssetQuote("pe") === "Valid"
                                    ? assetQuote.pe.toFixed(2)
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>earnings per share (eps)</KeyInfo>
                            <span>
                                {teriaryAssetQuote("eps") === "Valid"
                                    ? `${assetQuote.eps.toFixed(2)}$`
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo>primary exchange</KeyInfo>
                            <span>
                                {teriaryAssetQuote("exchange") === "Valid"
                                    ? assetQuote.exchange
                                    : "N/A"}
                            </span>
                        </InfoRow>
                    </InfoContainer>

                    <InfoContainer>
                        <Title>Description</Title>
                        <InfoRow>
                            <span style={{ fontSize: "1.3rem" }}>
                                {teriaryAssetInfo("description") === "Valid"
                                    ? assetInfo.description
                                    : "N/A"}{" "}
                                {teriaryAssetInfo("description") ===
                                    "Valid" && (
                                    <LinkInfo
                                        style={{
                                            fontSize: "1.4rem",
                                            fontWeight: "400",
                                            color: "#4287e9",
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://en.wikipedia.org/wiki/${assetInfo.companyName}`}
                                    >
                                        Wikipedia
                                    </LinkInfo>
                                )}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                CEO
                            </KeyInfo>
                            {teriaryAssetInfo("ceo") === "Valid" ? (
                                <LinkInfo
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/search?q=${assetInfo.ceo}&hl=en-GB`}
                                >
                                    {assetInfo.ceo}
                                </LinkInfo>
                            ) : (
                                "N/A"
                            )}
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                IPO Date
                            </KeyInfo>
                            <span>
                                {teriaryAssetInfo("ipoDate") === "Valid"
                                    ? assetInfo.ipoDate
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                headquarters
                            </KeyInfo>
                            {teriaryAssetInfo("address") === "Valid" &&
                            teriaryAssetInfo("city") === "Valid" &&
                            teriaryAssetInfo("state") === "Valid" ? (
                                <LinkInfo
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/maps/place/${assetInfo.address},${assetInfo.city},${assetInfo.state},`}
                                >
                                    {assetInfo.address}
                                    <br />
                                    {assetInfo.city.toLowerCase()},{" "}
                                    {assetInfo.state.toLowerCase()}
                                    <br />
                                    {convertCodeCountry(
                                        assetInfo.country.toUpperCase()
                                    )}
                                </LinkInfo>
                            ) : (
                                <LinkInfo>
                                    {teriaryAssetInfo("address") === "Valid" &&
                                        assetInfo.address}
                                    <br />
                                    {teriaryAssetInfo("city") === "Valid" &&
                                        assetInfo.city.toLowerCase()}
                                    ,{" "}
                                    {teriaryAssetInfo("state") === "Valid" &&
                                        assetInfo.state.toLowerCase()}
                                    <br />
                                    {teriaryAssetInfo("country") === "Valid" &&
                                        convertCodeCountry(
                                            assetInfo.country.toUpperCase()
                                        )}
                                </LinkInfo>
                            )}
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                industry
                            </KeyInfo>
                            <span>
                                {teriaryAssetInfo("industry") === "Valid"
                                    ? assetInfo.industry
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                sector
                            </KeyInfo>
                            <span>
                                {teriaryAssetInfo("sector") === "Valid"
                                    ? assetInfo.sector
                                    : "N/A"}
                            </span>
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                website
                            </KeyInfo>
                            {teriaryAssetInfo("website") === "Valid" && (
                                <LinkInfo
                                    style={{ textTransform: "none" }}
                                    href={`${assetInfo.website}`}
                                >
                                    {assetInfo.website}
                                </LinkInfo>
                            )}
                        </InfoRow>
                        <InfoRow>
                            <KeyInfo style={{ borderBottom: "none" }}>
                                full time employees
                            </KeyInfo>
                            <span>
                                {teriaryAssetInfo("fullTimeEmployees") ===
                                "Valid"
                                    ? assetInfo.fullTimeEmployees
                                    : "N/A"}
                            </span>
                        </InfoRow>
                    </InfoContainer>
                </div>
            )}
        </>
    );
}

AssetKeyInfo.propTypes = {
    ticker: PropTypes.string.isRequired,
    setAssetAddress: PropTypes.func.isRequired,
};
