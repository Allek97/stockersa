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
    z-index: 100;
    position: fixed;
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
`;

const Ball1 = styled.div`
    transition: all 3s;

    width: 1.5rem;
    height: 1.5rem;

    background-color: rgba(var(--color-primary-light), 1);

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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "7rem",
                        }}
                    >
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
