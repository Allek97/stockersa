import styled from "styled-components";

import InfoIcon from "../../../assets/svgs/info-icon.svg";
import ArrowUp from "../../../assets/svgs/arrow-up.svg";

export const Container = styled.div`
    display: block;

    flex: 1;

    padding: 2rem 0;

    box-shadow: var(--shadow-dark);
    border: 1px solid #142d69;

    border-radius: 2em;

    & > div:first-of-type {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.5rem;
        padding: 0 2rem;

        @media only screen and (max-width: 25em) {
            flex-direction: column;
        }
        div {
            display: flex;

            @media only screen and (max-width: 25em) {
                margin-top: 1rem;
            }
        }
    }
`;

export const Title = styled.h1`
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
    font-family: RobotoBold;
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

        background-color: ${(props) =>
            props.isFinance ? "#e8f0fe" : "transparent"};

        padding: 5px 1.3rem;
        width: max-content;
        height: max-content;

        border-radius: 3px;

        text-decoration: none;
        font-size: 1.5rem;
        font-family: RobotoBold;
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

export const ExpenseBox = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 80rem;

    margin: 0 auto 2rem;

    @media only screen and (max-width: 37.5em) {
        flex-direction: column;
    }

    /* svg {
        width: 45rem;
        height: 45rem;

        @media only screen and (max-width: 56.25em) {
            width: 50rem;
            height: 50rem;
        }

        & > g:first-of-type {
            transform: translate(22.5rem, 22.5rem);

            @media only screen and (max-width: 56.25em) {
                transform: translate(25rem, 25rem);
            }
        }
    } */

    & > div:first-of-type {
        display: grid;
        grid-template-columns: repeat(2, 10rem);
        grid-template-rows: repeat(3, 5rem);
        height: max-content;
        width: max-content;

        @media only screen and (max-width: 37.5em) {
            display: flex;
            justify-content: space-between;
            width: 95%;
            margin: 0 auto;
            margin-bottom: 2rem;
        }
    }
`;

export const InfoBox = styled.div`
    width: 95%;
    margin: 0 auto;
`;

export const InfoRow = styled.div`
    display: flex;

    align-items: center;

    padding: 3px 1rem;
    margin-bottom: 7px;

    border-top: 1px solid #43434d;

    font-size: 1.5rem;
    font-family: RobotoBold;
    text-transform: capitalize;

    color: white;
`;

export const KeyInfo = styled.span`
    width: 50%;
    margin-right: 1rem;

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
    margin-right: auto;

    text-align: right;
    font-size: 1.5rem;
    font-family: RobotoBold;
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

        width: max-content;
        padding: 1rem;

        border-radius: 5px;

        background-color: rgba(0, 0, 0, 0.87);

        font-size: 1.2rem;
        color: #fff;

        @media only screen and (max-width: 25em) {
            right: -10rem;
        }
    }
`;

export const RateChange = styled.span`
    display: flex;
    align-items: center;

    padding: 5px 0.8rem;

    border-radius: 8px;

    /* background: ${(props) =>
        props.state === "increase" ? "#d9f0e0" : "#fce8e6"}; */

    font-size: 1.5rem;
    font-family: RobotoBold;
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
    justify-content: space-between;

    padding: 1rem;
    margin-bottom: 1rem;
    margin-left: 6.2%;
    width: 82%;

    @media only screen and (max-width: 37.5em) {
        margin-left: 4%;
    }

    @media only screen and (max-width: 25em) {
        margin-left: 1%;
    }
`;
