import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const getDailyStockForSymbolTiingo = (
    symbol,
    startDate,
    endDate,
    frequence = "daily"
) => {
    return axiosInstance.get(`api/tiingo/`, {
        params: {
            url: encodeURI(
                `https://api.tiingo.com/tiingo/daily/${symbol}/prices/?startDate=${startDate}&endDate=${endDate}&resampleFreq=${frequence}&format:"json"&token=${process.env.REACT_APP_TIINGO_API_KEY}`
            ),
        },
    });
};

export const searchAssetTiingo = (
    assetName,
    limit,
    fields = "name,assetType",
    assetType = "ETF"
) => {
    return axiosInstance.get(`api/tiingo/`, {
        params: {
            url: encodeURI(
                `https://api.tiingo.com/tiingo/utilities/search?query=${assetName}&columns=${fields}&limit=${limit}&assetType=${assetType}&format:"json"&token=${process.env.REACT_APP_TIINGO_API_KEY}`
            ),
        },
    });
};

export const searchAssetInfoTiingo = (symbol) => {
    return axiosInstance.get(`api/tiingo/`, {
        params: {
            url: encodeURI(
                `https://api.tiingo.com/tiingo/daily/${symbol}?token=${process.env.REACT_APP_TIINGO_API_KEY}`
            ),
        },
    });
};
