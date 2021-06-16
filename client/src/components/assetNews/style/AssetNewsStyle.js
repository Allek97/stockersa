import styled from "styled-components";

export const NewsContainer = styled.div`
    display: block;

    flex: 1;

    padding: 2rem;

    box-shadow: var(--shadow-dark);
    border: 1px solid #142d69;

    border-radius: 2em;
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 0;

    color: white;
    margin-bottom: 1.2rem;
    margin-top: 0;
`;

export const NewsRow = styled.div`
    display: block;

    padding: 1.5rem 0;

    border-top: 1px solid #dadce0;
`;

export const SiteWeb = styled.span`
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    letter-spacing: 0.025em;
    font-weight: 600;
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
    width: 80rem;

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
    width: 80rem;
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
    align-self: flex-end;

    border-radius: 2px;

    background-color: #a5a5b1;

    color: white;
    font-size: 1.4rem;
    font-weight: 600;
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
`;
