// NOTE: https://financialmodelingprep.com/developer/docs/

import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://financialmodelingprep.com/api/v3/",
    baseURL: process.env.REACT_APP_BACKEND_URL,
});
const FMPURL = "https://financialmodelingprep.com/api/v3";

export const getDailyAssetPriceFMP = (symbol, startDate, endDate) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/historical-price-full/${symbol}?from=${startDate}&to=${endDate}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getTimelyAssetPriceFMP = (
    symbol,
    startDate,
    endDate,
    timeInterval = "1hour"
) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/historical-chart/${timeInterval}/${symbol}/?from=${startDate}&to=${endDate}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

// Search via ticker and company name
// Values for exchange parameter are:
//ETF | MUTUAL_FUND | COMMODITY | INDEX | CRYPTO | FOREX |
//TSX | AMEX | NASDAQ | NYSE | EURONEXT | XETRA | NSE | LSE

// NOTE : In this case I guess we don't need to specify stock exchange. A VOIR
export const searchAssetFMP = (query, limit) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/search/?query=${query}&limit=${limit}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getAssetInfoFMP = (symbol) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/profile/${symbol}?apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getAssetQuoteFMP = (symbol) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/quote/${symbol}?apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getAssetNewsFMP = async (symbols, limit) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/stock_news?tickers=${symbols}&limit=${limit}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getLatestNewsFMP = (limit = 6) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/stock_news?limit=${limit}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getAssetFinanceFMP = (symbol, limit = 5) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/income-statement/${symbol}?limit=${limit}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};

export const getAssetFinanceRateFMP = (symbol, limit = 5) => {
    return axiosInstance.get(`api/fmp/`, {
        params: {
            url: encodeURI(
                `${FMPURL}/income-statement-growth/${symbol}?limit=${limit}&apikey=${process.env.REACT_APP_FMP_API_KEY}`
            ),
        },
    });
};
