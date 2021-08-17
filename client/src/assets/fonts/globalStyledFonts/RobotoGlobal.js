import { createGlobalStyle } from "styled-components";

import RobotoBlack from "../Roboto-Black.ttf";
import RobotoRegular from "../Roboto-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${RobotoBlack}) format('ttf'),
        url(${RobotoRegular}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
