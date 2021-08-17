import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const ballAnimation1 = keyframes`
     0% {
        transform: scale(0) ;
    }

    50% {
        transform: scale(.5);
    }

    75% {
        transform: scale(1);
    }
   
    100% {
        transform: scale(.5) ;
    }
`;

const ballAnimation2 = keyframes`
     0% {
        transform: scale(0.5) ;
    }

    50% {
        transform: scale(1);
    }
   
    100% {
        transform: scale(.5) ;
    }
`;

const ballAnimation3 = keyframes`
     0% {
        transform: scale(1) ;
    }

    50% {
        transform: scale(.5);
    }

    75% {
        transform: scale(0.2);
    }
   
    100% {
        transform: scale(1) ;
    }
`;

const Overlay = styled.div`
    position: fixed;
    z-index: 1000000;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition-duration: 0.15s;
    transition-duration: 0.15s;

    width: 100%;
    height: 100%;

    background-color: white;

    & > div:first-of-type {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 7rem;
    }
`;

const Ball1 = styled.div`
    transition: all 3s;

    width: 1.5rem;
    height: 1.5rem;

    background-color: RGBA(var(--color-principal), 1);

    border-radius: 50%;

    animation: ${ballAnimation1} 0.85s linear infinite;
`;

const Ball2 = styled(Ball1)`
    animation: ${ballAnimation2} 0.85s linear infinite;
`;

const Ball3 = styled(Ball1)`
    animation: ${ballAnimation3} 0.85s linear infinite;
`;

export default function Loading({ loadingTime }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false);
        }, loadingTime);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);
    return (
        <>
            {isLoading && (
                <Overlay>
                    <div>
                        <Ball1 />
                        <Ball2 />
                        <Ball3 />
                    </div>
                </Overlay>
            )}
        </>
    );
}

Loading.propTypes = {
    loadingTime: PropTypes.number,
};

Loading.defaultProps = {
    loadingTime: 600,
};
