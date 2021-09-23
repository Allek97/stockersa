import React, { useRef } from "react";

import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Container, SocialList, SideLinkSvg } from "./FooterStyle";

import onScreenIntersection from "../../utils/onScreenIntersection";

export default function Footer() {
    const socialSvgStyle = {
        height: "100%",
        width: "100%",
    };

    const footerRef = useRef();
    const footerView = onScreenIntersection(footerRef, -20, false, 10);
    return (
        <Container ref={footerRef} animate={footerView}>
            <article>
                <SocialList animate={footerView}>
                    <li>
                        <SideLinkSvg
                            href="https://twitter.com/IAllekAmazigh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitterSquare style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg
                            href="https://github.com/Allek97"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg
                            href="https://iliasallek.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsFillPersonLinesFill style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                </SocialList>

                <h3>
                    copyright&copy; {new Date().getFullYear()}{" "}
                    <span>Ilias Allek </span> all rights reserved
                </h3>
            </article>
        </Container>
    );
}
