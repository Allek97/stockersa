import styled, { css, keyframes } from "styled-components";

const fadeVertically = keyframes`
    
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.footer`
    background-color: RGBA(var(--color-principal));

    display: grid;
    place-items: center;
    article {
        display: block;

        padding: 5rem 1rem;

        h3 {
            transition: all 1s;
            opacity: 0;
            transform: translateY(100%);

            ${(props) =>
                props.animate &&
                css`
                    animation: ${fadeVertically} 0.7s ease-out 0.2s forwards;
                `};

            font-size: 1.6rem;
            font-family: Poppins;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 3.2px;
            color: #e7e6e6;

            span {
                transition: all 0.5s;
                color: RGBA(var(--color-primary-light));
            }
        }
    }
`;

export const SocialList = styled.ul`
    display: flex;

    justify-content: space-between;

    width: 25rem;
    margin: 0 auto 2rem;

    list-style: none;

    li:first-of-type {
        animation-delay: 0.25s;
    }
    li:nth-child(2) {
        animation-delay: 0.5s;
    }
    li:nth-child(3) {
        animation-delay: 0.75s;
    }
    li:nth-child(4) {
        animation-delay: 1s;
    }
    li:nth-child(5) {
        animation-delay: 1.25s;
    }

    li {
        transition: all 1s;
        opacity: 0;
        transform: translateY(-100%);

        ${(props) =>
            props.animate &&
            css`
                animation: ${fadeVertically} 0.4s ease-in-out 0.1s forwards;
            `};

        height: 2.9rem;
        width: 2.9rem;

        svg {
            transition: all 0.2s;
            &:hover {
                transform: scale(1.3);
            }
        }
    }
`;

export const SideLinkSvg = styled.a`
    transition: all 0.3s linear;

    text-decoration: none;

    color: white;

    &:hover {
        transform: scale(1.1);
    }
`;
