import styled, { keyframes } from "styled-components";

import { AiOutlineFileSearch } from "react-icons/ai";

import LoopSvg from "../../../assets/svgs/search.svg";
import CloseSvg from "../../../assets/svgs/close.svg";
import AssetSvg from "../../../assets/svgs/asset.svg";

const loadAnim = keyframes`
 0% { transform: scale(1.2) }
`;

export const SearchSvg = styled(AiOutlineFileSearch)`
    fill: #016ce9;

    height: 3.2rem;
    width: 3.2rem;

    transition: all 0.3s;

    /* padding: 0.7rem; */
    margin-left: auto;

    border-radius: 50%;

    box-sizing: content-box;

    animation: ${loadAnim} 0.5s ease-in-out 1;

    cursor: pointer;

    box-shadow: 0 2rem 6rem #016de942;

    filter: brightness(1.3);

    align-self: center;

    &:focus,
    &:hover {
        transform: scale(1.1);
    }
`;

export const SearchBar = styled.nav`
    position: relative;

    flex: 1;
    transition: all 1.3s;

    max-width: 85rem;
    margin-left: auto;

    border-radius: 10rem;

    cursor: pointer;

    @media only screen and (max-width: 56.25em) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

        width: 100vw;
        height: 100vh;
        max-width: none;
        margin-left: 0;

        background: white;

        border-radius: 0;
    }

    &::before {
        content: "";

        display: block;

        height: 2.5rem;
        width: 2.5rem;

        position: absolute;
        top: 1.2rem;
        left: 0.9rem;

        background-image: linear-gradient(to right, white, white);

        mask-image: url(${LoopSvg});
        mask-size: cover;
        mask-position: center;

        @media only screen and (max-width: 56.25em) {
            height: 3rem;
            width: 3rem;

            top: 2.3rem;
            left: 2rem;

            background-image: linear-gradient(to right, #5f6368, #5f6368);
        }
    }
`;

export const SearchInput = styled.input`
    display: block;
    transition: all 0.3s;

    width: 100%;
    padding: 1.5rem 4rem;

    background-color: #14141a;

    border-radius: 10rem;
    border: none;

    font-size: 1.7rem;
    font-family: "Roboto", sans-serif;
    color: white;
    font-weight: 400;

    &:focus {
        outline: none;
        box-shadow: 0 2rem 6rem rgba(20, 20, 26, 0.7);
    }

    &::-webkit-input-placeholder {
        color: rgb(var(--color-grey-dark-2));
        font-weight: 400;
        font-family: Poppins;
    }

    @media only screen and (max-width: 56.25em) {
        padding: 2.7rem 6rem;

        border-radius: 0;
        border-bottom: 1px solid #dadce0;

        background-color: transparent;

        font-size: 1.9rem;
        color: rgba(var(--color-grey-dark-3));

        &:focus {
            outline: none;
            box-shadow: none;
        }
    }
`;

const sugsAnimation = keyframes`
    0% {
        height: 0;
    }100% {
        height: 100%;
    }
`;

export const Suggestions = styled.ul`
    position: absolute;
    z-index: 2;
    top: 6.5rem;
    left: 0;

    max-height: 30rem;
    overflow: hidden;

    border-top: none;
    border-radius: 2rem;
    /* border: 3px solid rgba(var(--color-primary-light), 1); */

    animation: ${sugsAnimation} 0.5s ease-out 1;

    width: 100%;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.4);

    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        /* background-color: rgb(31, 32, 51); */
    }

    &::-webkit-scrollbar-thumb {
        //#226f91;
        //  -webkit-border-radius: 10px;
        //  border-radius: 10px;
        background-color: #2451b7;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-thumb:window-inactive {
        background-color: #2451b7;
    }

    @media only screen and (max-width: 56.25em) {
        position: relative;

        top: 0;
        left: 0;

        max-height: 37.5rem;
        border-radius: 0;

        overflow-y: hidden;
        box-shadow: none;

        border-top: none;
        border-radius: 0;
    }
`;

export const Suggestion = styled.li`
    position: relative;

    min-height: 5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: #14141a;
    /* background-color: #313191; */

    list-style: none;

    font-size: 1.7rem;
    line-height: 1.9rem;

    color: #fff;
    font-weight: 400;

    cursor: pointer;

    &::before {
        // FIXME: WHY DO I NEED TO ADD CONTENT FOR SVG TO BE DISPLAYED CORRECTELLLY, PK ?
        content: "content";
        color: transparent;

        display: block;
        height: 1.7rem;
        width: 1.7rem;

        background-image: url(${AssetSvg});

        margin-top: -2px;
        margin-right: 3px;
        margin-left: 8px;

        @media only screen and (max-width: 56.25em) {
            height: 2rem;
            width: 2rem;
            margin-right: 3rem;
            margin-left: 2.5rem;
        }
    }

    &:focus {
        outline: none;
        box-shadow: 0 0px 16px #0005;
    }

    &:hover {
        /* background-color: rgba(20, 20, 26, 0.2); */
        background-color: #2451b7;
    }

    @media only screen and (max-width: 56.25em) {
        min-height: 7.5rem;

        background-color: white;
        color: rgba(var(--color-grey-dark-3));
        font-size: 1.9rem;
        font-weight: 400;

        border-bottom: 1px solid #dadce0;

        &:hover {
            /* background-color: rgba(20, 20, 26, 0.2); */
            background-color: #2450b77a;
        }
    }
`;

export const CloseSearch = styled.span`
    display: block;

    height: 1.35rem;
    width: 1.35rem;

    position: absolute;
    top: 1.8rem;
    right: 2rem;

    background-image: linear-gradient(to right, white, white);

    mask-image: url(${CloseSvg});
    mask-size: cover;
    mask-position: center;

    @media only screen and (max-width: 56.25em) {
        height: 2rem;
        width: 2rem;

        top: 3rem;
        right: 2rem;

        background-image: linear-gradient(to right, black, black);
    }
`;
