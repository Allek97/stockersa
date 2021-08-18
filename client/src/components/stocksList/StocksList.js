import React from "react";

import { StocksList, StockSvg } from "./StocksListStyle";

import apple from "../../assets/svgs/stocks/apple.svg";
import bankOfAmerica from "../../assets/svgs/stocks/bank-of-america.svg";
import berkshireHathaway from "../../assets/svgs/stocks/berkshire-hathaway.svg";
import boeing from "../../assets/svgs/stocks/boeing.svg";
import deloitte from "../../assets/svgs/stocks/deloitte.svg";
import jpmorganChase from "../../assets/svgs/stocks/jpmorgan-chase.svg";
import mastercard from "../../assets/svgs/stocks/mastercard.svg";
import tesla from "../../assets/svgs/stocks/tesla.svg";
import oracle from "../../assets/svgs/stocks/oracle.svg";
import pfizer from "../../assets/svgs/stocks/pfizer.svg";
import bombardier from "../../assets/svgs/stocks/bombardier.svg";
import microsoft from "../../assets/svgs/stocks/microsoft.svg";

export default function stocksList() {
    return (
        <div>
            <StocksList>
                <StockSvg svg={apple} stockName="apple" />
                <StockSvg svg={bankOfAmerica} stockName="bankOfAmerica" />
                <StockSvg
                    svg={berkshireHathaway}
                    stockName="berkshireHathaway"
                />
                <StockSvg svg={boeing} stockName="boeing" />
                <StockSvg svg={deloitte} stockName="deloitte" />
                <StockSvg svg={jpmorganChase} stockName="jpmorganChase" />
                <StockSvg svg={microsoft} stockName="microsoft" />
                <StockSvg svg={tesla} stockName="tesla" />
                <StockSvg svg={oracle} stockName="oracle" />
                <StockSvg svg={pfizer} stockName="pfizer" />
                <StockSvg svg={bombardier} stockName="bombardier" />
                <StockSvg svg={mastercard} stockName="mastercard" />
            </StocksList>
        </div>
    );
}
