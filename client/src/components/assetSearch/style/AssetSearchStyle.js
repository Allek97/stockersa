import styled, { keyframes } from "styled-components";

import LoopSvg from "../../../assets/svgs/search.svg";
import CloseSvg from "../../../assets/svgs/close.svg";
import AssetSvg from "../../../assets/svgs/asset.svg";

export const SearchBar = styled.div`
    position: relative;
    width: max-content;

    /* box-shadow: 0 2rem 6rem rgba(20, 20, 26, 0.7); */

    border-radius: 10rem;

    cursor: pointer;

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
    }
`;

export const SearchInput = styled.input`
    display: block;
    transition: all 0.3s;

    width: 90rem;
    padding: 1.5rem 4rem;
    margin-bottom: 5rem;

    background-color: #14141a;

    border-radius: 10rem;
    border: none;
    border-bottom: 3px solid transparent;

    font-size: 1.7rem;
    font-family: "Roboto", sans-serif;
    color: white;
    font-weight: 400;

    &:focus {
        outline: none;
        box-shadow: 0 2rem 6rem rgba(20, 20, 26, 0.7);
        /* box-shadow: var(--shadow-dark); */
        /* border-bottom: 3px solid #2451b7; */
    }

    &:focus:invalid {
        /* border-bottom: 3px solid rgba(204, 0, 0, 1); */
    }

    &::-webkit-input-placeholder {
        color: rgb(var(--color-grey-dark));
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

    /* &:not(:last-child) {
        border-bottom: 1px solid rgba(var(--color-primary-light));
    } */

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
    }

    &:focus {
        outline: none;
        box-shadow: 0 0px 16px #0005;
    }

    &:hover {
        /* background-color: rgba(20, 20, 26, 0.2); */
        background-color: #2451b7;
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
`;
