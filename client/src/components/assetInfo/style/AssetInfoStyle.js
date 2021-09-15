import styled from "styled-components";
import ArrowUp from "../../../assets/svgs/arrow-up.svg";

export const AssetNameHeading = styled.h1`
    margin-right: 5rem;
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 3.2rem;
    color: white;
`;

export const RateChange = styled.span`
    display: flex;
    align-items: center;

    width: min-content;
    padding: 5px 0.8rem;
    margin-bottom: 7px;

    border-radius: 8px;

    background: ${(props) =>
        props.state === "increase" ? "#d9f0e0" : "#fce8e6"};

    font-size: 1.7rem;
    font-family: RobotoBold;
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
    font-family: RobotoBold;
    line-height: 2.4rem;
    word-spacing: 1px;
    white-space: nowrap;
    color: ${(props) =>
        props.state === "increase"
            ? "rgb(var(--color-green-special))"
            : "#c72626"};
`;

export const LastClose = styled.div`
    display: flex;
    margin-bottom: 2px;

    font-size: 1.4rem;
    font-family: RobotoBold;
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

    border-radius: 1rem;

    background-color: ${(props) =>
        props.state === "increase"
            ? "rgb(var(--color-green-special))"
            : "#ed4242"};

    color: white;
    font-size: 1.5rem;
    font-family: RobotoBold;
    letter-spacing: 0.01785714em;
    line-height: 2rem;
    white-space: nowrap;
`;

export const CompanyLogo = styled.img`
    width: 2rem;
    height: 2rem;

    border-radius: 0rem;
`;
