import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoName = styled.span`
    margin-left: 1.5rem;

    /* background-image: linear-gradient(to right, #18acea, #cb3d8a, #084698);
     */

    background-image: linear-gradient(to left, #18acea, #084698);

    background-clip: text;
    -webkit-background-clip: text;

    font-size: 2.4rem;
    font-weight: 600;
    color: transparent;
`;

export const AssetInfoStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;

    @media only screen and (max-width: 46em) {
        flex-direction: column;
        align-items: flex-start;
    } //736px
`;

export const Btn = styled(Link)`
    &,
    &:link,
    &:visited {
        position: relative;

        display: inline-block;

        transition: all 0.2s;

        padding: 1.2rem 3rem;
        margin-left: 2rem;

        box-shadow: 1px 1px 32px 0 RGBA(41 99 221 / 50%);
        border-radius: 10rem;

        background-color: #0451b4;

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

    &:not(:last-child) {
        margin-right: 2rem;
    }
`;
