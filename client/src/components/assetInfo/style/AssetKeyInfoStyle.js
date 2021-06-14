import styled from "styled-components";
import ArrowUp from "../../../assets/svg/arrow-up.svg";

export const RateChange = styled.span`
    display: flex;
    align-items: center;

    width: min-content;
    padding: 5px 0.8rem;
    margin-bottom: 7px;
    margin-left: 2rem;

    border-radius: 8px;

    background: ${(props) =>
        props.state === "increase" ? "#d9f0e0" : "#fce8e6"};

    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 0.00625em;
    line-height: 2.4rem;
    color: ${(props) => (props.state === "increase" ? "#137333" : "#a50e0e")};

    &::before {
        content: "";

        display: block;

        height: 1.55rem;
        width: 1.55rem;

        margin-right: 3px;

        background-color: ${(props) =>
            props.state === "increase" ? "#137333" : "#a50e0e"};

        mask-image: url(${ArrowUp});
        mask-size: cover;
        mask-position: center;

        transform: rotate(
            ${(props) => (props.state === "increase" ? "0" : "180deg")}
        );
    }
`;

export const RawChange = styled.span`
    margin-left: 1rem;
    margin-bottom: 1rem;

    letter-spacing: 0.00625em;
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 2.4rem;
    word-spacing: 1px;
    color: ${(props) =>
        props.state === "increase"
            ? "rgb(var(--color-green-special))"
            : "#c72626"};
`;

export const LastClose = styled.div`
    display: flex;
    margin-bottom: 2px;

    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.01785714em;
    line-height: 2rem;

    color: rgb(95, 99, 104);
`;

export const StockSymbol = styled.div`
    /* position: absolute;
    right: 10rem; */

    padding: 5px 1.3rem;
    width: max-content;
    height: max-content;
    margin-left: auto;
    align-self: flex-end;

    border-radius: 1rem;

    background-color: ${(props) =>
        props.state === "increase"
            ? "rgb(var(--color-green-special))"
            : "#ed4242"};

    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.01785714em;
    line-height: 2rem;
`;

export const CompanyLogo = styled.img`
    width: 2rem;
    height: 2rem;

    border-radius: 0rem;
`;
