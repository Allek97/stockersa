import styled from "styled-components";

import InfoIcon from "../../../assets/svgs/info-icon.svg";
import ArrowUp from "../../../assets/svgs/arrow-up.svg";

export const Container = styled.div`
    display: block;

    flex: 1;

    padding: 2rem;

    box-shadow: var(--shadow-dark);
    border: 1px solid #142d69;

    border-radius: 2em;
`;

export const Title = styled.h1`
    width: 70%;

    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 0;

    color: white;
    margin-top: 0;
`;

export const CustomToolTip = styled.div`
    padding: 1rem 1rem;

    box-shadow: 1.5rem 3rem 4rem 0.5rem rgba(0, 0, 0, 0.5);

    opacity: 0.85;

    border-radius: 0.25rem;
    background-color: #26313c;

    /* text-align: center; */
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 3rem;
    color: #a7a7a7;
`;

export const UtilBtn = styled.a`
    &,
    &:link,
    &:visited {
        display: flex;
        align-items: center;

        transition: all 0.3s;
        /* box-shadow: 1px 1px 3.2rem rgba(31, 55, 180, 0.3); */

        /* height: 3.8rem; */
        /* width: 3.8rem; */

        /* border-radius: 18px; */

        background-color: ${(props) =>
            props.isFinance ? "#e8f0fe" : "transparent"};

        padding: 5px 1.3rem;
        width: max-content;
        height: max-content;

        border-radius: 3px;

        /* background-color: transparent; */
        overflow: hidden;

        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 600;
        color: #1967d2;
        cursor: pointer;
    }

    &:hover {
        /* background-color: #e8f0fe; selected */
        background-color: ${(props) =>
            !props.selected ? "#e8f0fe26" : "#e8f0fe"} !important;
        /* box-shadow: 1px 1px 3.2rem rgba(31, 55, 180, 0.3); */
    }
`;
export const FinanceToolTip = styled.div`
    display: flex;
    align-items: center;
    &::before {
        content: "";

        display: block;

        height: 1rem;
        width: 1rem;
        margin-right: 5px;

        border-radius: 50%;

        background-color: ${(props) =>
            props.indicatorColor ? props.indicatorColor : "#2451b7"};
    }
`;

//////////////////////////////////////////////////////////////////////////////////

export const InfoRow = styled.div`
    display: flex;

    align-items: center;

    border-top: 1px solid #43434d;

    padding: 3px 1rem;
    margin: 0 4rem;
    min-height: 4.3rem;

    font-size: 1.5rem;
    font-weight: 600;
    text-transform: capitalize;

    color: white;
`;

export const KeyInfo = styled.span`
    /* margin-right: 40rem; */

    width: 26rem;

    color: #a5a5b1;
    line-height: 1.8rem;

    cursor: pointer;
`;

export const SpecialKeyInfo = styled(KeyInfo)`
    display: flex;
    align-items: center;

    &::before {
        content: "";

        display: block;

        height: 1rem;
        width: 1rem;
        margin-right: 5px;

        border-radius: 50%;

        background-color: ${(props) => (props.color ? props.color : "red")};
    }
`;

export const RawValue = styled.span`
    /* margin-left: 40%;
    margin-right: auto; */

    margin-right: auto;
    width: 26rem;

    text-align: right;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    color: #fff;
`;

export const YearInfo = styled(RawValue)`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
        position: relative;

        display: block;

        height: 1.6rem;
        width: 1.6rem;
        margin-left: 8px;

        transition: transform 0.5s;

        background-image: linear-gradient(
            to right,
            rgba(var(--color-green-special)),
            rgba(var(--color-blue-special))
        );
        mask-image: url(${InfoIcon});
        mask-size: cover;

        cursor: pointer;

        &:hover {
            transform: rotate(180deg);
        }

        &:hover + div {
            transition: transform 0.5s;
            transform: scale(1);
        }
    }

    div {
        display: block;

        position: absolute;
        top: 3rem;
        right: -15rem;

        transition: transform 0.5s;

        transform: scale(0);
        padding: 1rem;

        border-radius: 5px;

        background-color: rgba(0, 0, 0, 0.87);

        font-size: 1.2rem;
        color: #fff;
    }
`;

export const RateChange = styled.span`
    display: flex;
    align-items: center;

    width: min-content;
    padding: 5px 0.8rem;
    margin-bottom: 7px;
    margin-left: 2rem;

    border-radius: 8px;

    /* background: ${(props) =>
        props.state === "increase" ? "#d9f0e0" : "#fce8e6"}; */

    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.00625em;
    line-height: 2.4rem;
    color: ${(props) =>
        props.state === "increase"
            ? "rgb(var(--color-green-special))"
            : "#ca1414"};

    &::before {
        content: "";

        display: block;

        height: 1.55rem;
        width: 1.55rem;

        margin-right: 2px;

        background-color: ${(props) =>
            props.state === "increase"
                ? "rgb(var(--color-green-special))"
                : "#ca1414"};

        mask-image: url(${ArrowUp});
        mask-size: cover;
        mask-position: center;

        transform: rotate(
            ${(props) => (props.state === "increase" ? "0" : "180deg")}
        );
    }
`;

export const YearBox = styled.div`
    display: flex;

    padding: 1rem;
    margin-left: 7rem;
    margin-bottom: 1rem;

    /* &:not(:last-child) {
    } */
`;
