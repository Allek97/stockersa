import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

import { UtilBtn } from "../style/AssetFinanceStyle";

import { nFormatter } from "../../../utils/UtilFunctions";

export default function AssetExpenses({
    financeData,
    isApiConsumed1,
    isApiConsumed2,
    firstDate,
}) {
    const [active, setActive] = useState(null);
    const [activeYear, setActiveYear] = useState(financeData.length - 1);

    const width = 400;
    const half = width / 2;

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

    console.log(expenseData);

    return (
        <>
            {isApiConsumed1 && isApiConsumed2 && (
                <div style={{ position: "relative" }}>
                    <div
                        style={{
                            position: "absolute",
                            right: "8rem",
                            top: "8rem",
                            display: "grid",
                            gridTemplateColumns: "repeat(2,10rem)",
                            gridTemplateRows: "repeat(4,5rem)",
                            height: "max-content",
                            width: "max-content",
                            padding: "1rem",
                        }}
                    >
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
                                        }}
                                        selected={activeYear === idx}
                                    >
                                        {parseInt(firstDate, 10) + idx}
                                    </UtilBtn>
                                );
                            })}
                    </div>
                    <svg width={450} height={450} style={{}}>
                        <Group top={225} left={225}>
                            <Pie
                                data={expenseData[activeYear]}
                                pieValue={(data) => data.value}
                                outerRadius={half + 2}
                                innerRadius={({ data }) => {
                                    const size =
                                        active &&
                                        active.expenseType === data.expenseType
                                            ? 12
                                            : 8;
                                    return half - size;
                                }}
                                padAngle={0.01}
                                style={{ transition: "all .5s" }}
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
                                                        transition: "all .3s",
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
                                        {`$${nFormatter(active.value, 2)} USD`}
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
                                                (acc, data) => acc + data.value,
                                                0,
                                                2
                                            )
                                        )} USD`}
                                    </Text>
                                </>
                            )}
                        </Group>
                    </svg>
                </div>
            )}
        </>
    );
}

AssetExpenses.propTypes = {
    financeData: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,

    firstDate: PropTypes.string.isRequired,
    isApiConsumed1: PropTypes.bool.isRequired,
    isApiConsumed2: PropTypes.bool.isRequired,
};
