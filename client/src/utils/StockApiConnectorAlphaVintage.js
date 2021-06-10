import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://www.alphavantage.co/query",
});

export const getDailyStockForSymbol = (symbol) => {
    return axiosInstance.get("", {
        params: {
            function: "TIME_SERIES_DAIlY",
            symbol,
            apikey: process.env.REACT_APP_ALPHA_VANTAGE_API_KEY,
        },
    });
};
