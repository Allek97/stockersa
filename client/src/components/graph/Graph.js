/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
    BarChart,
    Bar,
} from "recharts";

import {
    CustomToolTip,
    DateToolTip,
    VolumeToolTip,
} from "./style/ToolTipStyle";

// NOTE: FUNCTIONS

// import { getDailyStockForSymbol } from "../../utils/StockApiConnectorAlphaVintage";
import { getDailyStockForSymbolTiingo } from "../../utils/StockApiConnectorTiingo";
// import { stockDataMock } from "../../dev-data/stockDataMock";

import { getPastDate, formatDate } from "../../utils/DateFunctions";
import {
    getMonth,
    getFormattedDate,
    numberWithCommas,
} from "../../utils/UtilFunctions";

export default function Graph(props) {
    const {
        dataPeriod,
        ticker,
        isTiingoApiConsumed,
        setIsTiingoApiConsumed,
        setStartClose,
        setLastClose,
        setLastDate,
    } = props;

    const [stockData, setStockData] = useState([]);

    function handleTiingoApiCall(symbol, period) {
        const frequency = dataPeriod === "5Y" ? "weekly" : "daily";
        const res = getDailyStockForSymbolTiingo(
            symbol,
            getPastDate(period),
            formatDate(),
            frequency
        );

        return res;
    }

    // Tiingo api
    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await handleTiingoApiCall(ticker, dataPeriod);
                // console.log(res, ticker, dataPeriod);
                const { data } = res;

                // console.log(res);
                if (res.statusText === "OK" && data.length > 0) {
                    setStockData(data);
                    setIsTiingoApiConsumed(true);
                    setStartClose(data[0].close);
                    setLastClose(data[data.length - 1].close);
                    setLastDate(formatDate(data[data.length - 1].date));
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            // setStockData([]);
        };
    }, [ticker, dataPeriod]);

    return (
        <>
            {isTiingoApiConsumed && (
                <>
                    <div>
                        <ResponsiveContainer width="100%" height={700}>
                            <AreaChart
                                data={stockData}
                                syncId="anyId"
                                style={{ cursor: "pointer" }}
                            >
                                <defs>
                                    <linearGradient
                                        id="color"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#2451B7"
                                            stopOpacity={0.4}
                                        />
                                        <stop
                                            offset="75%"
                                            stopColor="#2451B7"
                                            stopOpacity={0.05}
                                        />
                                    </linearGradient>
                                </defs>

                                <Area
                                    dataKey="close"
                                    stroke="#2451B7"
                                    fill="url(#color)"
                                    tickFormatter={(value) =>
                                        `$${value.toFixed(2)}`
                                    }
                                />
                                <XAxis
                                    dataKey="date"
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(str, idx) => {
                                        // On s'en fout de l'an

                                        str = str.split("T")[0];

                                        const day = parseInt(
                                            str.split("-")[2],
                                            10
                                        );
                                        const month = getMonth(
                                            parseInt(str.split("-")[1], 10)
                                        ).substr(0, 3);

                                        if (idx % 7 === 0) {
                                            const date = month.concat(
                                                `, ${day}`
                                            );
                                            return date;
                                        }
                                        return "";
                                    }}
                                    minTickGap={10}
                                    fontWeight={900}
                                    fontSize="1.3rem"
                                    interval="preserveStartEnd"
                                />
                                <YAxis
                                    dataKey="close"
                                    axisLine={false}
                                    tickLine={false}
                                    tickCount={8}
                                    tickFormatter={(number, idx) => {
                                        if (idx === 0) return "";
                                        return `$${number.toFixed(2)}`;
                                    }}
                                    domain={["auto", "auto"]}
                                    padding={{ bottom: 20 }}
                                    fontWeight={900}
                                    fontSize="1.3rem"
                                />
                                <Tooltip content={<CustomizedToolTip />} />
                                <CartesianGrid opacity={0.1} vertical={false} />
                            </AreaChart>
                        </ResponsiveContainer>

                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart
                                width={730}
                                height={250}
                                margin={{ left: 70 }}
                                data={stockData}
                                syncId="anyId"
                            >
                                <Bar dataKey="volume" fill="#142d69" />
                                <XAxis
                                    tickCount={0}
                                    tickLine={false}
                                    tick={false}
                                />
                                <Tooltip
                                    content={<EmptyContent />}
                                    cursor={{
                                        fill: "rgba(255,255,255,.04)",
                                    }}
                                    // viewBox={{ x: 0, y: 0, width: 0, height: 0 }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </>
            )}
        </>
    );
}

const EmptyContent = () => {
    return <div>{}</div>;
};

const CustomizedToolTip = ({ active, payload, label }) => {
    if (active && payload !== null) {
        return (
            <CustomToolTip>
                <DateToolTip>{getFormattedDate(label)}</DateToolTip>
                <p>
                    Closed:{" "}
                    <span style={{ color: "white" }}>
                        {payload[0].payload.close}
                    </span>{" "}
                    <span style={{ fontSize: "1.3rem", color: "white" }}>
                        USD
                    </span>
                </p>
                <VolumeToolTip>
                    Volume: {numberWithCommas(payload[0].payload.volume)}
                </VolumeToolTip>
            </CustomToolTip>
        );
    }

    return null;
};

Graph.propTypes = {
    dataPeriod: PropTypes.string,
    ticker: PropTypes.string.isRequired,
    isTiingoApiConsumed: PropTypes.bool.isRequired,
    setIsTiingoApiConsumed: PropTypes.func.isRequired,
    setStartClose: PropTypes.func.isRequired,
    setLastClose: PropTypes.func.isRequired,
    setLastDate: PropTypes.func.isRequired,
};

Graph.defaultProps = {
    dataPeriod: "1Y",
};
