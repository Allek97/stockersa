import styled from "styled-components";

export const MapInfoSearch = styled.div`
    /* display: flex; */
    max-width: 130rem;
    margin: 1rem;

    & > div:first-of-type {
        margin-bottom: 3rem;
    }

    @media only screen and (max-width: 37.5em) {
        margin: 0 1rem;
    }
`;

export const MapTitle = styled.div`
    position: relative;
    z-index: 10;
    padding: 1rem;

    display: flex;

    width: max-content;
    height: max-content;
    margin-right: auto;

    box-shadow: var(--shadow-light);

    border: 1px solid #151535b0;
    border-radius: 5px;

    background-color: #151535b0;

    text-align: center;
    font-size: 2.5rem;
    color: #f1f1f1;

    @media only screen and (max-width: 37.5em) {
        position: absolute;
        bottom: 3rem;
        right: 0rem;

        width: 80%;
    }
`;

export const InfoWindowStyle = styled.div`
    position: relative;
    display: flex;
    /* align-items: flex-end; */

    font-size: 1.55rem;
    font-family: RobotoBold;

    &:not(:last-child) {
        margin-bottom: 1.2rem;
    }

    span {
        color: rgba(var(--color-primary-light));
        opacity: 0.9;
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: rgba(var(--color-primary-light));
        margin-right: 8px;
    }

    a {
        text-decoration: underline;
        color: rgba(var(--color-primary-light));
        opacity: 0.9;
    }
`;

//NOTE: SEARCHBAR

export const SearchContainer = styled.div`
    position: relative;

    display: block;

    max-width: 47rem;
    margin-right: 8rem;

    height: max-content;

    box-shadow: 2px 2px 30rem rgba(247, 247, 247, 0.3);

    overflow: hidden;

    font-size: 1.4rem;

    @media only screen and (max-width: 46em) {
        margin-top: 10rem;
    }

    @media only screen and (max-width: 37.5em) {
        margin-top: 0;
    }

    .google-map-search-svg,
    .google-map-close-svg {
        position: absolute;

        height: 1.8rem;
        width: 1.8rem;

        /* fill: RGBA(var(--color-grey-dark)); */
        fill: black;
    }

    .google-map-search-svg {
        top: 1.12rem;
        left: 5px;
    }

    .google-map-close-svg {
        top: 1.12rem;
        right: 5px;

        cursor: pointer;
    }
`;

export const SearchBar = styled.input`
    display: block;
    /* transition: all 0.3s; */

    padding: 1.2rem 3rem;

    width: 100%;

    background-color: RGBA(white, 0.75);

    border-radius: 8px;
    border: none;

    background-color: white;

    color: black;
    font-size: 1.4rem;
    font-weight: 400;

    &:focus {
        outline: none;
    }

    &::-webkit-input-placeholder {
        font-family: Poppins;
        font-weight: 400;
        color: rgb(var(--color-grey-dark-2));
    }
`;

export const SearchSuggestionsList = styled.ul`
    width: 100%;

    border-top: 1px solid grey;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    background-color: white;
`;

export const SearchSuggestion = styled.a`
    position: relative;

    display: flex;
    align-items: center;

    width: 500%;

    padding: 1rem;

    list-style: none;
    line-height: 1.6rem;
    color: #151535;
    font-weight: 400;

    cursor: pointer;

    &:first-of-type {
        padding-top: 1.1rem;
    }

    & > div:first-of-type {
        width: max-content;
        text-align: match-parent;
    }

    svg {
        width: 1.5rem;
        height: 1.5rem;

        margin-right: 1.5rem;
        fill: #151535;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0px 16px #0005;
    }

    &:hover {
        background-color: RGBA(var(--color-primary-light), 0.45);
    }
`;
