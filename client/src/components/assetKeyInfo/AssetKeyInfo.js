import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
    padding: 2rem;
    /* padding-bottom: 10rem; // NOTE: remove */
    width: 40rem;

    border-radius: 2em;

    box-shadow: var(--shadow-dark);

    margin-left: auto;

    border: 1px solid #142d69;

    /* background-color: #142d69; */
`;

const Title = styled.h1`
    font-size: 2.1rem;
    font-weight: 400;
    letter-spacing: 0;

    color: white;
    margin-bottom: 1.2rem;
    margin-top: 0;
`;
const InfoRow = styled.div`
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

const KeyInfo = styled.span`
    color: #a5a5b1;
    border-bottom: 1px dashed #858b94;
    line-height: 1.8rem;

    cursor: pointer;
`;

export default function AssetKeyInfo() {
    return (
        <div>
            <InfoContainer style={{ marginBottom: "2rem" }}>
                <Title>Key stats</Title>
                <InfoRow>
                    <KeyInfo>previous close</KeyInfo>
                    <span>$145.66</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>day range</KeyInfo>
                    <span>$256.61 - $258.49</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>year range</KeyInfo>
                    <span>$184.01 - $263.19</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>market cap</KeyInfo>
                    <span>1.94T USD</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>volume</KeyInfo>
                    <span>24.93M</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>P/E ratio</KeyInfo>
                    <span>35.10</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>divident yield</KeyInfo>
                    <span>0.87%</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>primary exchange</KeyInfo>
                    <span>NASDAQ</span>
                </InfoRow>
            </InfoContainer>

            <InfoContainer>
                <Title>Description</Title>
                <InfoRow>
                    <span style={{ fontSize: "1.2rem" }}>
                        Microsoft Corporation is an American multinational
                        technology company which produces computer software,
                        consumer electronics, personal computers, and related
                        services. Its best known software products are the
                        Microsoft Windows line of operating systems, the
                        Microsoft Office suite, and the Internet Explorer and
                        Edge web browsers. Its flagship hardware products are
                        the Xbox video game consoles and the Microsoft Surface
                        lineup of touchscreen personal computers. Microsoft
                        ranked No. 21 in the 2020 Fortune 500 rankings of the
                        largest United States corporations by total revenue; it
                        was the world's largest software maker by revenue as of
                        2016. It is considered one of the Big Five companies in
                        the U.S. information technology industry, along with
                        Google, Apple, Amazon, and Facebook. Microsoft was
                        founded by Bill Gates and Paul Allen on April 4, 1975,
                        to develop and sell BASIC interpreters for the Altair
                        8800. It rose to dominate the personal computer
                        operating system market with MS-DOS in the mid-1980s,
                        followed by Microsoft Windows.
                    </span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>day range</KeyInfo>
                    <span>$256.61 - $258.49</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>year range</KeyInfo>
                    <span>$184.01 - $263.19</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>market cap</KeyInfo>
                    <span>1.94T USD</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>volume</KeyInfo>
                    <span>24.93M</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>P/E ratio</KeyInfo>
                    <span>35.10</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>divident yield</KeyInfo>
                    <span>0.87%</span>
                </InfoRow>
                <InfoRow>
                    <KeyInfo>primary exchange</KeyInfo>
                    <span>NASDAQ</span>
                </InfoRow>
            </InfoContainer>
        </div>
    );
}
