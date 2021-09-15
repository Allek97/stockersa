import styled from "styled-components";

export const NewsContainer = styled.div`
    display: block;

    /* flex: 0 0 114rem; */

    /* max-width: 114rem; */

    padding: 2rem;
    margin-bottom: 5rem;

    box-shadow: var(--shadow-dark);
    border: 1px solid #142d69;

    border-radius: 2em;

    & > div:first-of-type {
        display: flex;

        @media only screen and (max-width: 37.5em) {
            flex-direction: column;
            align-items: flex-start;

            & > h1:first-of-type {
                max-width: 100%;
                margin: 0 0 1rem;
            }
        }

        & > div:first-of-type {
            display: flex;

            @media only screen and (max-width: 37.5em) {
                margin: 0 0 2rem !important;
                & > * {
                    margin: 0 !important;
                }
            }
        }
    }
`;

export const Title = styled.h1`
    max-width: 70%;
    margin: 0 auto 1.2rem 0;

    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 0;

    color: white;
`;

export const NewsRow = styled.div`
    display: flex;

    justify-content: space-between;

    padding: 1.5rem 0;

    border-top: 1px solid #dadce0;

    @media only screen and (max-width: 37.5em) {
        flex-direction: column;
    }

    .news-info {
        flex: 1;
        margin-right: 5rem;

        & > div:first-of-type {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1rem;
        }
        & > div:nth-child(2) {
            display: flex;
            flex-direction: column;
        }

        @media only screen and (max-width: 37.5em) {
            margin: 0;
        }
    }

    .news-thumbnail {
        overflow: hidden;
        border-radius: 1rem;

        @media only screen and (max-width: 37.5em) {
            order: -1;
            margin: 0 auto 2rem;
        }
    }
`;

export const SiteWeb = styled.span`
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    letter-spacing: 0.025em;
    font-family: RobotoBold;
    line-height: 1.6rem;
    color: #a5a5b1;

    &::after {
        content: "";

        display: block;

        height: 4px;
        width: 4px;
        margin: 0 1rem;

        background-color: #a5a5b1;

        border-radius: 50%;
    }
`;

export const NewsTitle = styled.span`
    margin-bottom: 3rem;
    max-width: 80rem;

    letter-spacing: 0.00625em;
    font-size: 1.7rem;
    line-height: 2.4rem;
    font-weight: 400;
    /* color: #fff; */
    color: #1967d2;

    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const NewsContent = styled(NewsTitle)`
    margin-bottom: 0;

    color: #fff;
    font-size: 1.45rem;

    cursor: default;

    &:hover {
        text-decoration: none;
    }
`;

export const StockSymbol = styled.div`
    padding: 2px 1.3rem;
    width: max-content;
    height: max-content;
    margin-left: auto;

    border-radius: 2px;

    background-color: #a5a5b1;

    color: white;
    font-size: 1.4rem;
    font-family: RobotoBold;
    letter-spacing: 0.01785714em;
    line-height: 2rem;
`;

export const NewsImage = styled.img`
    transition: all 0.3s;

    height: 15rem;
    width: 25rem;

    border-radius: 1rem;

    cursor: pointer;

    &:hover {
        filter: brightness(1.2);
    }

    @media only screen and (max-width: 37.5em) {
        height: 25rem;
        width: 100%;
    }
`;

export const NewsBtn = styled.a`
    &,
    &:link,
    &:visited {
        /* display: flex;
        align-items: center; */

        transition: all 0.3s;

        background-color: ${(props) =>
            props.isRelatedNews ? "#e8f0fe" : "transparent"};

        padding: 5px 1.3rem;
        width: max-content;
        height: max-content;

        border-radius: 3px;

        overflow: hidden;

        text-decoration: none;
        white-space: nowrap;
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
