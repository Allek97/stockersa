import moment from "moment";

////////////////////////////////////////////////////////

export function dateLastRefresh(date) {
    const showEventDate = moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");

    return showEventDate;
}

export function formatDate(date = new Date()) {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}

export const getPastDate = (pastValue) => {
    let date;

    switch (pastValue) {
        case "1D":
            date = new Date(new Date().setDate(new Date().getDate() - 1));
            break;
        case "1W":
            date = new Date(new Date().setDate(new Date().getDate() - 7));
            break;
        case "1M":
            date = new Date(new Date().setMonth(new Date().getMonth() - 1));
            break;
        case "3M":
            date = new Date(new Date().setMonth(new Date().getMonth() - 3));
            break;
        case "6M":
            date = new Date(new Date().setMonth(new Date().getMonth() - 6));
            break;
        case "1Y":
            date = new Date(
                new Date().setFullYear(new Date().getFullYear() - 1)
            );

            break;
        case "5Y":
            date = new Date(
                new Date().setFullYear(new Date().getFullYear() - 5)
            );
            break;

        default:
            break;
    }

    return formatDate(date);
};
