/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Container, UtilBtn, Title } from "./style/AssetFinanceStyle";

import AssetFinances from "./components/AssetFinances";
import AssetExpenses from "./components/AssetExpenses";

import {
    getAssetFinanceFMP,
    getAssetFinanceRateFMP,
} from "../../utils/StockApiConnectorFMP";

export default function AssetFinanace({ ticker }) {
    const [financeData, setFinanceData] = useState([]);
    const [financeDataRate, setFinanceDataRate] = useState([]);

    const [isFinance, setIsFinance] = useState(true);

    const [isFinanceApiConsumed, setIsFinanceApiConsumed] = useState(false);
    const [isFinanceRateApiConsumed, setIsFinanceRateApiConsumed] =
        useState(false);

    const [activeYear, setActiveYear] = useState(null);

    const [firstDate, setFirstDate] = useState("");

    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetFinanceFMP(ticker);
                const { data, status } = res;

                if (status === 200 && data.length > 0) {
                    setFinanceData(data.reverse());
                    setFirstDate(data[0].date.split("-")[0]);
                    setActiveYear(data.length - 1);
                    setIsFinanceApiConsumed(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            setFinanceData([]);
            setIsFinanceApiConsumed(false);
        };
    }, [ticker]);

    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetFinanceRateFMP(ticker);
                const { data, status } = res;

                if (status === 200 && data.length > 0) {
                    setFinanceDataRate(data.reverse());
                    setIsFinanceRateApiConsumed(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            setFinanceDataRate([]);
            setIsFinanceRateApiConsumed(false);
        };
    }, [ticker]);

    // function teriaryAssetQuote(field) {
    //     if (assetQuote) {
    //         if (
    //             assetQuote[`${field}`] !== null &&
    //             assetQuote[`${field}`] !== ""
    //         ) {
    //             return "Valid";
    //         }
    //     }

    //     return "N/A";
    // }

    return (
        <>
            <Container>
                <div style={{ display: "flex", marginBottom: "2.5rem" }}>
                    <Title>
                        {isFinance
                            ? "Financial performance"
                            : "Expenses information"}
                    </Title>
                    <UtilBtn
                        isFinance={isFinance}
                        selected={isFinance}
                        onClick={() => {
                            setIsFinance(true);
                        }}
                        style={{
                            marginLeft: "auto",
                            marginRight: "1rem",
                            backgroundColor: isFinance
                                ? "#e8f0fe"
                                : "transparent",
                        }}
                    >
                        Finances
                    </UtilBtn>
                    <UtilBtn
                        isFinance={isFinance}
                        selected={!isFinance}
                        onClick={() => {
                            setIsFinance(false);
                        }}
                        style={{
                            marginRight: "2px",
                            marginLeft: "2px",
                            backgroundColor: !isFinance
                                ? "#e8f0fe"
                                : "transparent",
                        }}
                    >
                        Expenses
                    </UtilBtn>
                </div>
                {isFinance ? (
                    <>
                        <AssetFinances
                            financeData={financeData}
                            financeDataRate={financeDataRate}
                            isFinanceApiConsumed={isFinanceApiConsumed}
                            isFinanceRateApiConsumed={isFinanceRateApiConsumed}
                            setActiveYear={setActiveYear}
                            activeYear={activeYear}
                            firstDate={firstDate}
                        />
                    </>
                ) : (
                    <>
                        <AssetExpenses
                            financeData={financeData}
                            financeDataRate={financeDataRate}
                            isFinanceApiConsumed={isFinanceApiConsumed}
                            isFinanceRateApiConsumed={isFinanceRateApiConsumed}
                            firstDate={firstDate}
                        />
                    </>
                )}
            </Container>
        </>
    );
}

AssetFinanace.propTypes = {
    ticker: PropTypes.string.isRequired,
};
