import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
    0% {
        transform: translateY(20rem);
        opacity: 0;
    }
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

        /* width: max-content;
        margin: 0 auto; */

        padding: 5rem 1rem;

        h3 {
            font-size: 1.6rem;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 3.2px;
            color: #e7e6e6;

            font-family: Poppins;

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
        opacity: 0;
        height: 2.9rem;
        width: 2.9rem;

        animation: ${slideUp} 0.5s ease-in-out 0.3s forwards;

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
