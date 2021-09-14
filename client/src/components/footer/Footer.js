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
                        <SideLinkSvg href="/">
                            <FaTwitterSquare style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg href="/">
                            <FaGithubSquare style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg href="/">
                            <FaFacebookSquare style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg href="/">
                            <FaLinkedin style={socialSvgStyle} />
                        </SideLinkSvg>
                    </li>
                    <li>
                        <SideLinkSvg href="/">
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
