import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PerdiodSwitchBox = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 55rem;
    width: 45%;

    /* margin-left: auto; */

    @media only screen and (max-width: 46em) {
        max-width: 50rem;
        width: 100%;
    }
`;

export const StockPeriodBtn = styled.a`
    &,
    &:link,
    &:visited {
        position: relative;

        display: flex;
        align-items: center;

        /* transition: all 1s; */
        /* box-shadow: 1px 1px 32px 0 rgb(41 99 221 / 50%); */

        /* overflow: hidden; */

        padding: 0 5px;

        text-decoration: none;
        font-size: 1.4rem;
        font-family: RobotoBold;
        color: #fff;
        cursor: pointer;
    }

    &:focus,
    &:active {
        color: #ffffffa0;
    }

    &::after {
        content: "";

        position: absolute;

        bottom: -0.5rem;
        left: 0px;

        height: 4px;
        width: 100%;
        border-radius: 4px 4px 0 0;

        background-color: ${(props) =>
            props.isSelected ? "rgba(var(--color-green-special))" : null};
    }
`;

export default function PeriodSwitch(props) {
    const { setDataPeriod } = props;

    const iniArr = new Array(7).fill(false);
    iniArr[5] = true;
    const [selectedPeriod, setSelectedPriod] = useState(iniArr);

    const handlePeriodSelect = (idx) => {
        const result = selectedPeriod.map((el, periodIdx) => {
            if (periodIdx === idx) {
                return true;
            }
            return false;
        });

        setSelectedPriod(result);
    };

    return (
        <PerdiodSwitchBox>
            <StockPeriodBtn
                isSelected={selectedPeriod[0]}
                onClick={() => {
                    setDataPeriod("1D");
                    handlePeriodSelect(0);
                }}
            >
                1D
            </StockPeriodBtn>
            <StockPeriodBtn
                isSelected={selectedPeriod[1]}
                onClick={() => {
                    setDataPeriod("1W");
                    handlePeriodSelect(1);
                }}
            >
                1W
            </StockPeriodBtn>
            <StockPeriodBtn
                isSelected={selectedPeriod[2]}
                onClick={() => {
                    setDataPeriod("1M");
                    handlePeriodSelect(2);
                }}
            >
                1M
            </StockPeriodBtn>
            <StockPeriodBtn
                isSelected={selectedPeriod[3]}
                onClick={() => {
                    setDataPeriod("3M");
                    handlePeriodSelect(3);
                }}
            >
                3M
            </StockPeriodBtn>
            <StockPeriodBtn
                isSelected={selectedPeriod[4]}
                onClick={() => {
                    setDataPeriod("6M");
                    handlePeriodSelect(4);
                }}
            >
                6M
            </StockPeriodBtn>
            <StockPeriodBtn
                isSelected={selectedPeriod[5]}
                onClick={() => {
                    setDataPeriod("1Y");
                    handlePeriodSelect(5);
                }}
            >
                1Y
            </StockPeriodBtn>
            <StockPeriodBtn
                isSelected={selectedPeriod[6]}
                onClick={() => {
                    setDataPeriod("5Y");
                    handlePeriodSelect(6);
                }}
            >
                5Y
            </StockPeriodBtn>
        </PerdiodSwitchBox>
    );
}

PeriodSwitch.propTypes = {
    setDataPeriod: PropTypes.func.isRequired,
};
