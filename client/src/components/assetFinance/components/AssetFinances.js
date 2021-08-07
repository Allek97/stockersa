/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    BarChart,
    Bar,
} from "recharts";

import {
    CustomToolTip,
    FinanceToolTip,
    UtilBtn,
    InfoRow,
    KeyInfo,
    RateChange,
    RawValue,
    SpecialKeyInfo,
    YearInfo,
    YearBox,
} from "../style/AssetFinanceStyle";

import { nFormatter } from "../../../utils/UtilFunctions";

export default function AssetFinances({
    financeData,
    financeDataRate,
    firstDate,
    setActiveYear,
    activeYear,
    isFinanceApiConsumed,
    isFinanceRateApiConsumed,
}) {
    return (
        <>
            {isFinanceApiConsumed && isFinanceRateApiConsumed && (
                <>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart width={730} height={250} data={financeData}>
                            <CartesianGrid
                                opacity={0.05}
                                vertical={false}
                                stroke="#fff"
                            />
                            <XAxis
                                dataKey="financeData"
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickCount={6}
                                orientation="right"
                                tickFormatter={(el) => {
                                    const value = nFormatter(Math.abs(el), 2);
                                    return el < 0 ? `-${value}` : value;
                                }}
                                fontWeight={900}
                                fontSize="1.3rem"
                                style={{ fill: "#a5a5b1" }}
                                color="#264408"
                                opacity={1}
                            />
                            <Tooltip
                                content={<CustomizedToolTip />}
                                cursor={{
                                    fill: "rgba(255,255,255,.04)",
                                }}
                            />
                            <Bar dataKey="netIncome" fill="rgb(249, 171, 0)" />
                            <Bar
                                dataKey="grossProfit"
                                fill="rgb(var(--color-green-special))"
                            />
                            <Bar
                                dataKey="revenue"
                                fill="rgba(var(--color-blue-special),1)"
                            />
                        </BarChart>
                    </ResponsiveContainer>

                    <YearBox>
                        {new Array(financeData.length)
                            .fill(1)
                            .map((el, idx) => {
                                return (
                                    <UtilBtn
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={idx}
                                        onClick={() => {
                                            setActiveYear(idx);
                                        }}
                                        style={{
                                            backgroundColor:
                                                activeYear === idx && "#e8f0fe",
                                            marginRight:
                                                idx !==
                                                    financeData.length - 1 &&
                                                "14.8rem",
                                        }}
                                        selected={activeYear === idx}
                                    >
                                        {parseInt(firstDate, 10) + idx}
                                    </UtilBtn>
                                );
                            })}
                    </YearBox>

                    <div>
                        <InfoRow style={{ borderTop: "none" }}>
                            <KeyInfo>(USD)</KeyInfo>
                            <YearInfo>
                                {parseInt(firstDate, 10) + activeYear} <span />
                                <div>
                                    Fiscal year ended{" "}
                                    {financeData[activeYear].date}
                                </div>
                            </YearInfo>
                            <span>Income Statement year change</span>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="rgb(249, 171, 0)">
                                Net Income
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear].netIncome < 0 && "-"}$
                                {nFormatter(
                                    Math.abs(financeData[activeYear].netIncome),
                                    2
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthNetIncome >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthNetIncome * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="rgb(var(--color-green-special))">
                                Gross Profit
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear].grossProfit < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear].grossProfit
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthGrossProfit >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthGrossProfit * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="rgba(var(--color-blue-special),1)">
                                Revenue
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear].revenue < 0 && "-"}$
                                {nFormatter(
                                    Math.abs(financeData[activeYear].revenue)
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear].growthRevenue >=
                                    0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear].growthRevenue *
                                    100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>gross Profit Ratio</KeyInfo>
                            <RawValue>
                                {financeData[
                                    activeYear
                                ].grossProfitRatio.toFixed(2)}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthGrossProfitRatio >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthGrossProfitRatio * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>net Income Ratio</KeyInfo>
                            <RawValue>
                                {financeData[activeYear].netIncomeRatio.toFixed(
                                    2
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthNetIncomeRatio >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthNetIncomeRatio * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                Ebitda
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear].ebitda < 0 && "-"}$
                                {nFormatter(
                                    Math.abs(financeData[activeYear].ebitda)
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear].growthEBITDA >=
                                    0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear].growthEBITDA *
                                    100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>Ebitda ratio</KeyInfo>
                            <RawValue>
                                {financeData[activeYear].ebitdaratio.toFixed(2)}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthEBITDARatio >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthEBITDARatio * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>operating Income</KeyInfo>
                            <RawValue>
                                {financeDataRate[activeYear]
                                    .growthOperatingIncome < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear].operatingIncome
                                    ),
                                    2
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthOperatingIncome >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthOperatingIncome * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>operating Income Ratio</KeyInfo>
                            <RawValue>
                                {financeData[
                                    activeYear
                                ].operatingIncomeRatio.toFixed(2)}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthOperatingIncomeRatio >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthOperatingIncomeRatio * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>eps (earnings per share) diluted</KeyInfo>
                            <RawValue>
                                ${financeData[activeYear].epsdiluted.toFixed(2)}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthEPSDiluted >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthEPSDiluted * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo>
                                weighted Average shares outstanding
                            </KeyInfo>
                            <RawValue>
                                {financeDataRate[activeYear]
                                    .weightedAverageShsOut < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .weightedAverageShsOut
                                    ),
                                    2
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthWeightedAverageShsOut >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthWeightedAverageShsOut * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>
                    </div>
                </>
            )}
        </>
    );
}

const CustomizedToolTip = ({ active, payload }) => {
    if (active && payload !== null) {
        return (
            <CustomToolTip>
                <span>
                    Fiscal Year :{" "}
                    <span style={{ color: "white", marginLeft: "5px" }}>
                        {payload[0].payload.date}
                    </span>
                </span>
                <FinanceToolTip indicatorColor="rgb(249, 171, 0)">
                    Net Income:{" "}
                    <span style={{ color: "white", marginLeft: "5px" }}>
                        {payload[0].payload.netIncome < 0
                            ? `-${nFormatter(
                                  Math.abs(payload[0].payload.netIncome),
                                  2
                              )}`
                            : nFormatter(payload[0].payload.netIncome, 2)}{" "}
                        USD
                    </span>
                </FinanceToolTip>

                <FinanceToolTip indicatorColor="rgb(var(--color-green-special))">
                    Gross Profit:{" "}
                    <span style={{ color: "white", marginLeft: "5px" }}>
                        {payload[0].payload.grossProfit < 0
                            ? `-${nFormatter(
                                  Math.abs(payload[0].payload.grossProfit),
                                  2
                              )}`
                            : nFormatter(
                                  payload[0].payload.grossProfit,
                                  2
                              )}{" "}
                        USD
                    </span>
                </FinanceToolTip>

                <FinanceToolTip indicatorColor="rgba(var(--color-blue-special),1)">
                    Revenue :{" "}
                    <span style={{ color: "white", marginLeft: "5px" }}>
                        {" "}
                        {payload[0].payload.revenue < 0
                            ? `-${nFormatter(
                                  Math.abs(payload[0].payload.revenue),
                                  2
                              )}`
                            : nFormatter(payload[0].payload.revenue, 2)}{" "}
                        USD
                    </span>
                </FinanceToolTip>
            </CustomToolTip>
        );
    }

    return null;
};

AssetFinances.propTypes = {
    financeData: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    financeDataRate: PropTypes.arrayOf(PropTypes.shape({}).isRequired)
        .isRequired,
    firstDate: PropTypes.string.isRequired,
    setActiveYear: PropTypes.func.isRequired,
    activeYear: PropTypes.number,
    isFinanceApiConsumed: PropTypes.bool.isRequired,
    isFinanceRateApiConsumed: PropTypes.bool.isRequired,
};

AssetFinances.defaultProps = {
    activeYear: 2020,
};
