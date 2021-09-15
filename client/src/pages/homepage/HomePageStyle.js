import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

import headerBg from "../../assets/svgs/header-bg.svg";

const slideVertically = keyframes`

to {
    opacity: 1;
    transform: translateY(0);
}
`;

// const slideHorizontally = keyframes`
// to {
//     transform: translateY(0);
// }
// `;

const fadeHorizontally = keyframes`
to {
    opacity: 1;
    transform: translateX(0);
}
`;
/////////////////////////////////////////////////
//NOTE: HERO SECTION
/////////////////////////////////////////////////
export const HeroSection = styled.section`
    height: 100%;
    background: rgba(var(--color-principal), 1) url(${headerBg});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 1.5rem;

    & > div:first-of-type {
        min-height: 65rem;
        max-width: 115rem;
        width: 92vw;
        margin: 0 auto;

        @media only screen and (max-width: 56.25em) {
            max-width: 60rem;
            margin: 0 auto;
        }
    }
`;

export const HomeNavBar = styled.header`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8rem;

    transition: all 1s;
    opacity: 0;
    transform: translateY(-150%);

    animation: ${fadeHorizontally} 0.7s ease-out 0.1s 1 forwards;

    & > a:first-of-type {
        display: flex;
        align-items: center;

        margin-right: auto;
        text-decoration: none;
    }
`;

export const HeroArticle = styled.article`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    height: 88%;

    @media only screen and (max-width: 59.4em) {
        align-items: center;
    }
    @media only screen and (max-width: 56.25em) {
        flex-direction: column;
    }

    & > div:first-of-type {
        display: block;
        max-width: 50rem;
        width: 50%;

        @media only screen and (max-width: 56.25em) {
            margin-bottom: 5rem;
            width: 100%;
            max-width: none;
        }

        h1 {
            transition: all 1s;
            opacity: 0;
            transform: translateY(150%);

            animation: ${fadeHorizontally} 0.7s ease-out 0.1s 1 forwards;

            margin-bottom: 2rem;

            font-size: 3.2rem;
            font-family: RobotoBold;
            letter-spacing: 1px;
            line-height: 4rem;
            text-transform: capitalize;
            color: white;
        }

        h3 {
            transition: all 1s;
            opacity: 0;
            transform: translateY(50%);

            animation: ${fadeHorizontally} 0.7s ease-out 0.4s 1 forwards;

            margin-bottom: 2rem;
            font-size: 1.9rem;
            font-weight: 400;
            line-height: 3rem;
            color: white;
        }
    }

    svg {
        margin-right: -3rem;
        max-width: 60rem;
        width: 55%;

        @media only screen and (max-width: 56.25em) {
            margin-right: 0;
            width: 100%;
            max-width: none;
        }
    }
`;

/////////////////////////////////////////////////
//NOTE: APP SECTION
/////////////////////////////////////////////////

export const AppSection = styled.section`
    display: flex;
    background: #eff2f5;
    overflow: hidden;
`;

export const ResponsiveArticle = styled.article`
    display: flex;
    justify-content: space-between;
    max-width: 115rem;
    width: 92vw;
    margin: 0 auto;
    padding: 12rem 0 0;

    @media only screen and (max-width: 56.25em) {
        max-width: 60rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    img {
        transition: all 1s;
        transform: ${(props) =>
            props.isTabLand ? "translateX(-100%)" : "translateY(-100%)"};

        ${(props) =>
            props.animate3dMockUp &&
            css`
                animation: ${slideVertically} 0.6s ease-out 0.1s 1 forwards;
            `};

        max-width: 50rem;
        width: 50%;
        margin-left: -14rem;
        padding-left: 3rem;

        @media only screen and (max-width: 56.25em) {
            max-width: none;
            width: 120%;
            order: 2;
        }
    }

    div {
        display: block;

        opacity: 0;
        transform: translateX(100%);
        ${(props) =>
            props.animateArticle &&
            css`
                animation: ${fadeHorizontally} 0.6s ease-out 0.1s 1 forwards;
            `};

        max-width: 60rem;
        width: 60%;

        @media only screen and (max-width: 56.25em) {
            max-width: none;
            width: 100%;
            margin-bottom: 5rem;
        }

        h1 {
            margin-bottom: 2rem;

            font-size: 3.2rem;
            font-family: RobotoBold;
            letter-spacing: 1px;
            line-height: 4rem;
            text-transform: capitalize;
            color: black;
        }

        h3 {
            margin-bottom: 2rem;
            font-size: 1.9rem;
            font-weight: 400;
            line-height: 3rem;
            color: black;

            span {
                color: RGBA(var(--color-primary-light));
                font-family: RobotoBold;
            }
        }
    }
`;

/////////////////////////////////////////////////
//NOTE: STOCKS SECTION
/////////////////////////////////////////////////

const StockAndExchangeSection = styled.section`
    display: block;
    padding: 12rem 0;
    div:first-of-type {
        max-width: 115rem;
        width: 92vw;
        margin: 0 auto;

        div:first-of-type {
            transition: all 1s;
            opacity: 0;
            transform: ${(props) =>
                props.isTabLand ? "translateY(-50%)" : "translateY(-80%)"};

            ${(props) =>
                props.animateText &&
                css`
                    animation: ${fadeHorizontally} 0.6s ease-out 0.1s 1 forwards;
                `};
        }

        div:nth-of-type(2) {
            transition: all 1s;
            opacity: 0;
            transform: translateY(100%);

            ${(props) =>
                props.animateList &&
                css`
                    animation: ${fadeHorizontally} 0.65s ease-out 0.1s 1
                        forwards;
                `};
        }
        h1 {
            margin-bottom: 3rem;
            font-size: 3.2rem;
            font-family: RobotoBold;
            letter-spacing: 1px;
            line-height: 4rem;
            text-transform: capitalize;
            text-align: center;
            color: black;

            span {
                color: RGBA(var(--color-primary-light));
                font-size: 3.5rem;
            }
        }

        h3 {
            max-width: 70rem;
            margin: 0 auto 6rem;

            font-size: 1.9rem;
            font-weight: 400;
            line-height: 3rem;
            text-align: center;
            color: black;
        }
        svg {
            width: 100%;
        }
    }
`;

export const StocksSection = styled(StockAndExchangeSection)`
    h3 {
        max-width: 75rem;
    }
`;

/////////////////////////////////////////////////
//NOTE: EXCHANGES SECTION
/////////////////////////////////////////////////
export const ExchangesSection = styled(StockAndExchangeSection)`
    background: #eff2f5;
    background-size: cover;
    h3 {
        max-width: 60rem;
    }
`;

/////////////////////////////////////////////////
//NOTE: UTILS
/////////////////////////////////////////////////

export const StockBtn = styled(Link)`
    &,
    &:link,
    &:visited {
        position: relative;

        display: flex;
        align-items: center;

        transition: all 0.2s;

        padding: 0.8rem 3rem;
        margin-left: 2rem;
        /* align-self: center; */

        box-shadow: 1px 1px 32px 0 RGBA(41 99 221 / 50%);
        border-radius: 5px;

        background-color: rgba(var(--color-primary-light));

        font-size: 1.4rem;
        text-decoration: none;
        text-align: center;
        font-family: inherit;
        font-family: RobotoBold;
        color: white;
        cursor: pointer;
    }

    &:active,
    &:focus {
        outline: none;
        box-shadow: 0 0.5rem 1rem RGBA(var(--color-black), 0.2);
    }

    &:hover {
        filter: brightness(1.1);
    }

    svg {
        margin-left: 1rem;
        font-size: 1.9rem;
    }
`;

export const LogoName = styled.h1`
    margin-left: 1rem;

    background-color: white;

    background-clip: text;
    -webkit-background-clip: text;

    font-size: 2.4rem;
    /* font-family: RobotoBold; */
    font-family: PoppinsBold;
    color: transparent;
`;

export const Tag = styled.span`
    display: block;
    padding: 0.7rem 1.4rem;
    margin-bottom: 2rem;
    width: max-content;
    background: rgba(var(--color-primary-light));
    border-radius: 10rem;

    filter: brightness(1.05);

    font-size: 1.4rem;
    font-family: RobotoBold;
    text-align: center;

    color: #fff;
`;
