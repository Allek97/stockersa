import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.tiingo.com/tiingo/daily",
});

export const getDailyStockForSymbolTiingo = (symbol, startDate, endDate) => {
    return axiosInstance.get(`${symbol}`, {
        params: {
            startDate,
            endDate,
            token: process.env.REACT_APP_TIINGO_API_KEY,
            format: "json",
        },
    });
};
