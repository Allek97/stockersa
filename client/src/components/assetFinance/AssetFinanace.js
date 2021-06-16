import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    BarChart,
    Bar,
    Legend,
} from "recharts";

import { getAssetFinanceFMP } from "../../utils/StockApiConnectorFMP";

const FinanceContainer = styled.div`
    display: block;

    width: 63.1%;

    flex: 1;

    padding: 2rem;

    box-shadow: var(--shadow-dark);
    border: 1px solid #142d69;

    border-radius: 2em;
`;

export default function AssetFinanace({ ticker }) {
    const [financeData, setFinanceData] = useState([]);
    const [isApiConsumed, setIsApiConsumed] = useState(false);

    useEffect(() => {
        async function fetchMyApi() {
            try {
                const res = await getAssetFinanceFMP(ticker);
                const { data, status } = res;
                if (status === 200 && data.length > 0) {
                    setFinanceData(data.reverse());
                    setIsApiConsumed(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();

        return () => {
            setFinanceData([]);
            setIsApiConsumed(false);
        };
    }, [ticker]);
    return (
        <>
            {isApiConsumed && (
                <FinanceContainer>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart width={730} height={250} data={financeData}>
                            <CartesianGrid
                                opacity={1}
                                vertical={false}
                                horizontalPoints={[0, 280, 400]}
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
                            />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="netIncome" fill="#82ca9d" />
                            <Bar dataKey="grossProfit" fill="#82ca9d" />
                            <Bar dataKey="revenue" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </FinanceContainer>
            )}
        </>
    );
}

AssetFinanace.propTypes = {
    ticker: PropTypes.string.isRequired,
};
