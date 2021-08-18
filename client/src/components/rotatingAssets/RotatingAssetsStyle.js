import styled, { css, keyframes } from "styled-components";

const scroll = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
    max-width: 115rem;
    width: 95vw;
    padding: 10rem 0 5rem;
    overflow: hidden;

    @media only screen and (max-width: 56.25em) {
        max-width: 60rem;
        margin: 0 auto;
    }
`;

export const Box = styled.div`
    display: flex;

    /* overflow: hidden; */
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;

    list-style: none;

    animation: ${scroll} 20s linear infinite;
    &:first-of-type {
        margin-left: -145.5rem; // NOTE: The width of the List below
    }
`;

const handleAssetFit = (asset) => {
    switch (asset) {
        case "facebook":
            return css`
                width: 13.5rem;
                mask-position: center;
            `;
        case "apple":
            return css`
                width: 13rem;
                mask-position: 0 37%;
            `;
        case "desjardins":
            return css`
                width: 16rem;
                mask-position: center;
            `;
        case "google":
            return css`
                width: 11rem;
                mask-position: 0 75%;
            `;
        case "amazon":
            return css`
                width: 12rem;
                mask-position: 0 90%;
            `;
        case "micronTech":
            return css`
                width: 13rem;
                mask-position: center;
            `;
        case "microsoft":
            return css`
                width: 14rem;
                mask-position: center;
            `;
        case "tesla":
            return css`
                width: 13rem;
                mask-position: center;
            `;
        default:
            return css`
                width: 13rem;
                mask-position: center;
            `;
    }
};

export const AssetSvg = styled.li`
    fill: white;
    height: 6rem;
    margin-right: 5rem;

    /* width: 15rem;
    mask-position: center; */

    background-image: linear-gradient(to right, white, white);
    mask-image: url(${(props) => props.svg});
    mask-size: contain;
    mask-repeat: no-repeat;

    background-color: red;

    ${(props) => handleAssetFit(props.assetFit)}
`;
