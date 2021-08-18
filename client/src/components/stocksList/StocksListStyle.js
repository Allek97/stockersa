import styled, { css } from "styled-components";

export const StocksList = styled.ul`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);

    gap: 2rem;

    list-style: none;

    @media only screen and (max-width: 68em) {
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 56.25em) {
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: repeat(2, 1fr);
        margin: 0 auto;
        max-width: 80rem;
    }
    @media only screen and (max-width: 37.5em) {
        /* grid-template-rows: repeat(6, 1fr); */
        grid-template-columns: repeat(1, 1fr);
        margin: 0 auto;
        max-width: 40rem;
    }
`;

const handleStockFit = (stockName) => {
    switch (stockName) {
        case "apple":
            return css`
                background-size: 125px;
                background-position: center;
            `;
        case "bankOfAmerica":
            return css`
                background-size: 220px;
                background-position: center;
            `;
        case "berkshireHathaway":
            return css`
                background-size: 260px;
                background-position: 50% 52%;
            `;
        case "boeing":
            return css`
                background-size: 150px;
                background-position: 50% 59%;
            `;
        case "deloitte":
            return css`
                background-size: 130px;
                background-position: center;
            `;
        case "jpmorganChase":
            return css`
                background-size: 250px;
                background-position: center;
            `;
        case "mastercard":
            return css`
                background-size: 100px;
                background-position: center;
            `;
        case "tesla":
            return css`
                background-size: 133px;
                background-position: center;
            `;
        case "oracle":
            return css`
                background-size: 135px;
                background-position: center;
            `;
        case "pfizer":
            return css`
                background-size: 110px;
                background-position: center;
            `;
        case "bombardier":
            return css`
                background-size: 160px;
                background-position: center;
            `;
        case "microsoft":
            return css`
                background-size: 150px;
                background-position: center;
            `;
        default:
            return css`
                background-size: 130px;
                background-position: center;
            `;
    }
};

export const StockSvg = styled.li`
    height: 11rem;

    border-radius: 1rem;

    background: #eff2f5 url(${(props) => props.svg});
    background-repeat: no-repeat;

    ${(props) => handleStockFit(props.stockName)}

    @media only screen and (max-width: 56.25em) {
        height: 13rem;
    }
`;
