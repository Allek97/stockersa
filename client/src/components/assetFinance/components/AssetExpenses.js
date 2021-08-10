/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

import {
    UtilBtn,
    ExpenseBox,
    InfoBox,
    InfoRow,
    KeyInfo,
    RateChange,
    RawValue,
    SpecialKeyInfo,
    YearInfo,
} from "../style/AssetFinanceStyle";

import { nFormatter } from "../../../utils/UtilFunctions";

export default function AssetExpenses({
    financeData,
    financeDataRate,
    isFinanceApiConsumed,
    isFinanceRateApiConsumed,
    firstDate,
}) {
    const [active, setActive] = useState(null);
    const [activeYear, setActiveYear] = useState(financeData.length - 1);

    const isTinyPhone = useMediaQuery({ query: "(max-width: 25em)" });
    const isPhone = useMediaQuery({ query: "(max-width: 37.5em)" });
    const isTabLand = useMediaQuery({ query: "(max-width: 56.25em)" });

    const pieWidth = () => {
        if (isTinyPhone) {
            return 290;
        }
        if (isPhone) {
            return 300;
        }
        if (isTabLand) {
            return 350;
        }

        return 400;
    };
    const half = pieWidth() / 2;

    const correction = isTinyPhone ? 30 : 50;

    const formatExpenseData = (data) => {
        return Object.entries(data).map((entries) => {
            const [key, object] = entries;

            return [
                {
                    key,
                    date: object.date,
                    expenseType: "Cost Of Revenue",
                    value: object.costOfRevenue,
                    color: "rgba(var(--color-blue-special),1)",
                },
                {
                    key,
                    date: object.date,
                    expenseType: "General And Administrative Expenses",
                    value: object.generalAndAdministrativeExpenses,
                    color: "rgb(var(--color-green-special))",
                },
                {
                    key,
                    date: object.date,
                    expenseType: "Research And Development Expenses",
                    value: object.researchAndDevelopmentExpenses,
                    color: "#820d86",
                },
                {
                    key,
                    date: object.date,
                    expenseType: "Selling And Marketing Expenses",
                    value: object.sellingAndMarketingExpenses,
                    color: "rgb(249, 171, 0)",
                },
            ];
        });
    };

    const expenseData = formatExpenseData(financeData);

    return (
        <>
            {isFinanceApiConsumed && isFinanceRateApiConsumed && (
                <div>
                    <ExpenseBox>
                        <svg
                            width={half * 2 + correction}
                            height={half * 2 + correction}
                        >
                            <Group
                                top={half + correction / 2}
                                left={half + correction / 2}
                            >
                                <Pie
                                    data={expenseData[activeYear]}
                                    pieValue={(data) => data.value}
                                    outerRadius={half + 2}
                                    innerRadius={({ data }) => {
                                        const size =
                                            active &&
                                            active.expenseType ===
                                                data.expenseType
                                                ? 12
                                                : 8;
                                        return half - size;
                                    }}
                                    padAngle={0.01}
                                    style={{
                                        transition: "all .5s",
                                    }}
                                >
                                    {(pie) => {
                                        return pie.arcs.map((arc) => {
                                            return (
                                                <g
                                                    key={arc.data.expenseType}
                                                    onMouseEnter={() =>
                                                        setActive(arc.data)
                                                    }
                                                    onMouseLeave={() =>
                                                        setActive(null)
                                                    }
                                                >
                                                    <path
                                                        d={pie.path(arc)}
                                                        fill={arc.data.color}
                                                        style={{
                                                            transition:
                                                                "all .3s",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                </g>
                                            );
                                        });
                                    }}
                                </Pie>
                                <Text
                                    textAnchor="middle"
                                    fill="#c9c9c9"
                                    fontSize="2rem"
                                    dy={-80}
                                >
                                    {`${
                                        expenseData[activeYear][0].date.split(
                                            "-"
                                        )[0]
                                    }`}
                                </Text>
                                {active ? (
                                    <>
                                        <Text
                                            textAnchor="middle"
                                            fill="#c9c9c9"
                                            fontSize="2rem"
                                            dy={-30}
                                        >
                                            {`${active.expenseType}`}
                                        </Text>

                                        <Text
                                            textAnchor="middle"
                                            fill="#fff"
                                            fontSize="3rem"
                                            dy={30}
                                        >
                                            {`$${nFormatter(
                                                active.value,
                                                2
                                            )} USD`}
                                        </Text>
                                    </>
                                ) : (
                                    <>
                                        <Text
                                            textAnchor="middle"
                                            fill="#c9c9c9"
                                            fontSize="2rem"
                                            dy={-30}
                                        >
                                            Total Cost And Expenses
                                        </Text>

                                        <Text
                                            textAnchor="middle"
                                            fill="#fff"
                                            fontSize="3rem"
                                            dy={30}
                                        >
                                            {`$${nFormatter(
                                                expenseData[activeYear].reduce(
                                                    (acc, data) =>
                                                        acc + data.value,
                                                    0,
                                                    2
                                                )
                                            )} USD`}
                                        </Text>
                                    </>
                                )}
                            </Group>
                        </svg>

                        <div>
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
                                                    activeYear === idx &&
                                                    "#e8f0fe",
                                            }}
                                            selected={activeYear === idx}
                                        >
                                            {parseInt(firstDate, 10) + idx}
                                        </UtilBtn>
                                    );
                                })}
                        </div>
                    </ExpenseBox>

                    <InfoBox>
                        <InfoRow style={{ borderTop: "none" }}>
                            <KeyInfo>(USD)</KeyInfo>
                            <YearInfo>
                                {parseInt(firstDate, 10) + activeYear} <span />
                                <div>
                                    Fiscal year ended{" "}
                                    {financeData[activeYear].date}
                                </div>
                            </YearInfo>
                            <span>
                                {isPhone
                                    ? `Year change`
                                    : `Expense Statement year change`}
                            </span>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="rgba(var(--color-blue-special),1)">
                                Cost of revenue
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear].costOfRevenue < 0 &&
                                    "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear].costOfRevenue
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthCostOfRevenue >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthCostOfRevenue * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="#820d86">
                                research And Development Expenses
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear]
                                    .researchAndDevelopmentExpenses < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .researchAndDevelopmentExpenses
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthResearchAndDevelopmentExpenses >=
                                    0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthResearchAndDevelopmentExpenses *
                                    100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="rgb(var(--color-green-special))">
                                General And Administrative Expenses
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear]
                                    .generalAndAdministrativeExpenses < 0 &&
                                    "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .generalAndAdministrativeExpenses
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthGeneralAndAdministrativeExpenses >=
                                    0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthGeneralAndAdministrativeExpenses *
                                    100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <SpecialKeyInfo color="rgb(249, 171, 0)">
                                selling And Marketing Expenses
                            </SpecialKeyInfo>
                            <RawValue>
                                {financeData[activeYear]
                                    .sellingAndMarketingExpenses < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .sellingAndMarketingExpenses
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthSellingAndMarketingExpenses >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthSellingAndMarketingExpenses * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                other Expenses
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear].otherExpenses < 0 &&
                                    "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear].otherExpenses
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthOtherExpenses >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthOtherExpenses * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                operating Expenses
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear].operatingExpenses <
                                    0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .operatingExpenses
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthOperatingExpenses >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthOperatingExpenses * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                interest Expense
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear].interestExpense < 0 &&
                                    "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear].interestExpense
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthInterestExpense >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthInterestExpense * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                depreciation And Amortization
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear]
                                    .depreciationAndAmortization < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .depreciationAndAmortization
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthDepreciationAndAmortization >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthDepreciationAndAmortization * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                total Other Income Expenses Net
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear]
                                    .totalOtherIncomeExpensesNet < 0 && "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear]
                                            .totalOtherIncomeExpensesNet
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthTotalOtherIncomeExpensesNet >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthTotalOtherIncomeExpensesNet * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>

                        <InfoRow>
                            <KeyInfo style={{ textTransform: "capitalize" }}>
                                income Tax Expense
                            </KeyInfo>
                            <RawValue>
                                {financeData[activeYear].incomeTaxExpense < 0 &&
                                    "-"}
                                $
                                {nFormatter(
                                    Math.abs(
                                        financeData[activeYear].incomeTaxExpense
                                    )
                                )}
                            </RawValue>
                            <RateChange
                                state={
                                    financeDataRate[activeYear]
                                        .growthIncomeTaxExpense >= 0
                                        ? "increase"
                                        : "decrease"
                                }
                            >
                                {(
                                    financeDataRate[activeYear]
                                        .growthIncomeTaxExpense * 100
                                ).toFixed(2)}
                                %
                            </RateChange>
                        </InfoRow>
                    </InfoBox>
                </div>
            )}
        </>
    );
}

AssetExpenses.propTypes = {
    financeData: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    financeDataRate: PropTypes.arrayOf(PropTypes.shape({}).isRequired)
        .isRequired,
    firstDate: PropTypes.string.isRequired,
    isFinanceApiConsumed: PropTypes.bool.isRequired,
    isFinanceRateApiConsumed: PropTypes.bool.isRequired,
};
