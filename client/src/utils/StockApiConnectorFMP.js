import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://financialmodelingprep.com/api/v3/",
});

export const getAssetInfoFMP = (symbol) => {
    return axiosInstance.get(`profile/${symbol}/`, {
        params: {
            apikey: process.env.REACT_APP_FMP_API_KEY,
        },
    });
};

export const getAssetQuoteFMP = (symbol) => {
    return axiosInstance.get(`quote/${symbol}/`, {
        params: {
            apikey: process.env.REACT_APP_FMP_API_KEY,
        },
    });
};

export const getAssetNewsFMP = (symbols, limit) => {
    return axiosInstance.get(`stock_news/`, {
        params: {
            tickers: symbols,
            apikey: process.env.REACT_APP_FMP_API_KEY,
            limit,
        },
    });
};

export const getAssetLatestNewsFMP = (limit = 6) => {
    return axiosInstance.get(`stock_news/`, {
        params: {
            apikey: process.env.REACT_APP_FMP_API_KEY,
            limit,
        },
    });
};

export const getAssetFinanceFMP = (symbol, limit = 5) => {
    return axiosInstance.get(`income-statement/${symbol}`, {
        params: {
            apikey: process.env.REACT_APP_FMP_API_KEY,
            limit,
        },
    });
};

export const getAssetFinanceRateFMP = (symbol, limit = 5) => {
    return axiosInstance.get(`income-statement-growth/${symbol}`, {
        params: {
            apikey: process.env.REACT_APP_FMP_API_KEY_3,
            limit,
        },
    });
};
