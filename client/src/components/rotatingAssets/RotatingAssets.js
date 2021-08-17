import React from "react";

import { Container, Box, List, AssetSvg } from "./RotatingAssetsStyle";
import facebook from "../../assets/svgs/stocks/facebook.svg";
import amazon from "../../assets/svgs/stocks/amazon.svg";
import apple from "../../assets/svgs/stocks/apple.svg";
import desjardins from "../../assets/svgs/stocks/desjardins.svg";
import google from "../../assets/svgs/stocks/google.svg";
import micronTech from "../../assets/svgs/stocks/micron-technology.svg";
import microsoft from "../../assets/svgs/stocks/microsoft.svg";
import tesla from "../../assets/svgs/stocks/tesla.svg";

const RotatingAssets = () => {
    return (
        <Container>
            <Box>
                <List>
                    <AssetSvg svg={facebook} assetFit="facebook" />
                    <AssetSvg svg={apple} assetFit="apple" />
                    <AssetSvg svg={desjardins} assetFit="desjardins" />
                    <AssetSvg svg={google} assetFit="google" />
                    <AssetSvg svg={amazon} assetFit="amazon" />
                    <AssetSvg svg={micronTech} assetFit="micronTech" />
                    <AssetSvg svg={microsoft} assetFit="microsoft" />
                    <AssetSvg svg={tesla} assetFit="tesla" />
                </List>
                <List>
                    <AssetSvg svg={facebook} assetFit="facebook" />
                    <AssetSvg svg={apple} assetFit="apple" />
                    <AssetSvg svg={desjardins} assetFit="desjardins" />
                    <AssetSvg svg={google} assetFit="google" />
                    <AssetSvg svg={amazon} assetFit="amazon" />
                    <AssetSvg svg={micronTech} assetFit="micronTech" />
                    <AssetSvg svg={microsoft} assetFit="microsoft" />
                    <AssetSvg svg={tesla} assetFit="tesla" />
                </List>
            </Box>
        </Container>
    );
};

export default RotatingAssets;
