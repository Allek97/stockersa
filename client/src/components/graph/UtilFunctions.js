export const getMonth = (num) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const selectedMonthName = months[num - 1];

    return selectedMonthName;
};

////////////////////////////////////////////////////////

export const getDayFromDate = (date) => {
    //date: year-month-day
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date(date);

    return days[d.getUTCDay()];
};
export const getFormattedDate = (date) => {
    // NOTE
    // date : year-month-day T00:00
    // return Sunday 16 May, 2021

    date = date.split("T")[0];

    const year = date.split("-")[0];
    const monthNb = date.split("-")[1];
    const dayNb = date.split("-")[2];

    const day = getDayFromDate(date);
    const month = getMonth(monthNb);

    const formattededDate = `${day} ${dayNb} ${month}, ${year}`;

    return formattededDate;
};

//////////////////////////////////////////////////////////////

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//////////////////////////////////////////////////////////////
// NOTE: le format est mauvais
const formatStockDataAlphaVantage = (stockData) => {
    return Object.entries(stockData).map((entries) => {
        const [date, priceData] = entries;

        return {
            date,
            open: Number(priceData["1. open"]),
            high: Number(priceData["2. high"]),
            low: Number(priceData["3. low"]),
            close: Number(priceData["4. close"]),
            volume: Number(priceData["5. volume"]),
        };
    });
};
