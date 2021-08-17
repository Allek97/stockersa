import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeNavBar = styled.header`
    display: flex;
    align-items: flex-start;
    margin-bottom: 8rem;

    & > a:first-of-type {
        display: flex;
        align-items: center;

        margin-right: auto;
        text-decoration: none;
    }
`;

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
        font-weight: 700;
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
    font-weight: 600;
    font-family: Poppins;
    color: transparent;
`;

export const HeroArticle = styled.article`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    height: 88%;

    @media only screen and (max-width: 56.25em) {
        margin-top: 5rem;
    }

    & > div:first-of-type {
        display: block;
        max-width: 50rem;

        h1 {
            margin-bottom: 2rem;

            font-size: 3.2rem;
            font-weight: 600;
            letter-spacing: 1px;
            line-height: 4rem;
            text-transform: capitalize;
            color: white;
        }

        h3 {
            margin-bottom: 2rem;
            font-size: 1.9rem;
            font-weight: 400;
            line-height: 3rem;
            color: white;
        }
    }

    & > div:nth-child(2) {
        flex: 1;
        margin-right: -3rem;
        svg {
            max-width: 60rem;
            float: right;
        }
    }
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
    font-weight: 600;
    text-align: center;

    color: #fff;
`;
