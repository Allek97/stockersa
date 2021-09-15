import styled from "styled-components";

import calenderSvg from "../../../assets/svgs/calendar.svg";

export const CustomToolTip = styled.div`
    padding: 1rem 1rem;

    box-shadow: 1.5rem 3rem 4rem 0.5rem rgba(0, 0, 0, 0.5);

    opacity: 0.85;

    border-radius: 0.25rem;
    background-color: #26313c;

    /* text-align: center; */
    font-size: 1.6rem;
    font-weight: 600;
    color: #a7a7a7;
`;

export const DateToolTip = styled.div`
    display: flex;
    align-items: center;
    &::before {
        content: "";

        display: block;

        height: 1rem;
        width: 1rem;
        margin-right: 5px;
        margin-bottom: 3px;

        border-radius: 50%;

        background-color: rgba(var(--color-green-special));

        /* 
        background-image: linear-gradient(
            to right,
            rgba(var(--color-primary-light), 1),
            rgba(var(--color-primary-dark), 1)
        );

        mask-image: url(${calenderSvg});
        mask-size: cover;
        mask-position: center; */
    }
`;

export const VolumeToolTip = styled.div`
    display: flex;
    align-items: center;
    &::before {
        content: "";

        display: block;

        height: 1rem;
        width: 1rem;
        margin-right: 5px;

        border-radius: 50%;

        background-color: #2451b7;

        /* 
        background-image: linear-gradient(
            to right,
            rgba(var(--color-primary-light), 1),
            rgba(var(--color-primary-dark), 1)
        );

        mask-image: url(${calenderSvg});
        mask-size: cover;
        mask-position: center; */
    }
`;
