import styled from "styled-components";

export const InfoContainer = styled.div`
    padding: 2rem;

    width: 55rem;

    border-radius: 2rem;

    box-shadow: var(--shadow-dark);

    border: 1px solid #142d69;

    /* background-color: #142d69; */
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: 0;

    color: white;
    margin-bottom: 1.2rem;
    margin-top: 0;
`;
export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-top: 1px solid #43434d;
    padding: 1rem 0;
    min-height: 4.3rem;

    font-size: 1.45rem;
    font-weight: 400;
    text-transform: capitalize;

    color: white;
`;

export const LinkInfo = styled.a`
    &,
    &:link,
    &:visited {
        transition: all 0.2s;

        color: #1967d2;
        text-decoration: none;
        text-align: right;
        font-weight: 600;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;

export const KeyInfo = styled.span`
    color: #a5a5b1;
    border-bottom: 1px dashed #858b94;
    line-height: 1.8rem;

    cursor: pointer;
`;
