/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

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

// import { getDailyStockForSymbol } from "../../utils/StockApiConnectorAlphaVintage";
import { stockDataMock } from "../../dev-data/stockDataMock";

import {
    CustomToolTip,
    DateToolTip,
    VolumeToolTip,
} from "./style/ToolTipStyle";

export default function Graph() {
    const [stockData, setStockData] = useState([]);

    useEffect(async () => {
        // NOTE: Limit of 5 requests/minute, 500 req/day => use mock data

        // const res = await getDailyStockForSymbol("TSLA");
        // const stockDataFormated = formatStockData(
        //     res.data["Time Series (Daily)"]
        // );

        // console.log(JSON.stringify(stockDataFormated.reverse()));

        setStockData(stockDataMock);
    }, []);

    return (
        <div>
            <ResponsiveContainer width="100%" height={700}>
                <AreaChart
                    data={stockData}
                    syncId="anyId"
                    style={{ cursor: "pointer" }}
                >
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
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
                        tickFormatter={(value) => `$${value.toFixed(2)}`}
                    />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(str, idx) => {
                            // On s'en fout de l'an
                            const day = parseInt(str.split("-")[2], 10);
                            const month = getMonth(
                                parseInt(str.split("-")[1], 10)
                            ).substr(0, 3);

                            if (idx % 7 === 0) {
                                const date = month.concat(`, ${day}`);
                                return date;
                            }
                            return "";
                        }}
                        fontWeight={900}
                        fontSize="1.3rem"
                        interval="preserveStart"
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
                    <Bar dataKey="volume" fill="#202b51" />
                    {/* <rect
                        x={x}
                        y={y}
                        width="2"
                        height="95"
                        stroke="none"
                        fill="#3366cc"
                        z-index="0"
                    /> */}
                    <XAxis tickCount={0} tickLine={false} tick={false} />
                    <Tooltip
                        content={<Zeb />}
                        cursor={{ fill: "rgba(255,255,255,.01)" }}
                        // viewBox={{ x: 0, y: 0, width: 0, height: 0 }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

const Zeb = () => {
    return <div>{}</div>;
};

// NOTE: le format est mauvais
const formatStockData = (stockData) => {
    return Object.entries(stockData).map((entries) => {
        const [date, priceData] = entries;

        return {
            date,
            open: Number(priceData["1. open"]),
            high: Number(priceData["2. high"]),
            low: Number(priceData["3. low"]),
            close: Number(priceData["4. close"]),
            volume: Number(priceData["5. volume"]),
        };
    });
};
//

const CustomizedToolTip = ({ active, payload, label }) => {
    if (active) {
        return (
            <CustomToolTip>
                <DateToolTip>{getFormattedDate(label)}</DateToolTip>
                <p>
                    Closed:{" "}
                    <span style={{ color: "white" }}>
                        ${payload[0].payload.close}
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

const getMonth = (num) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const selectedMonthName = months[num - 1];

    return selectedMonthName;
};

const getDayFromDate = (date) => {
    //date: year-month-day
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date(date);

    return days[d.getUTCDay()];
};
const getFormattedDate = (date) => {
    // NOTE
    // date : year-month-day
    // return Sunday 16 May, 2021

    const year = date.split("-")[0];
    const monthNb = date.split("-")[1];
    const dayNb = date.split("-")[2];

    const day = getDayFromDate(date);
    const month = getMonth(monthNb);

    const formattededDate = `${day} ${dayNb} ${month}, ${year}`;

    return formattededDate;
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
