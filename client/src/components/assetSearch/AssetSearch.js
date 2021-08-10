import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import useOuterClick from "../../utils/UseOuterClick";
import { searchAssetFMP } from "../../utils/apis/StockApiConnectorFMP";
import {
    SearchSvg,
    SearchBar,
    SearchInput,
    Suggestions,
    Suggestion,
    CloseSearch,
} from "./style/AssetSearchStyle";

export default function AssetSearch(props) {
    const { setTicker } = props;

    const [querySearch, setQuerySearch] = useState("");
    const [results, setResults] = useState([]);
    const searchRef = useRef(null);

    const [isSearch, setIsSearch] = useState(false);

    useOuterClick(searchRef, () => setQuerySearch(""));

    const handleSuggestionClick = (ticker) => {
        setTicker(ticker);
        setQuerySearch("");
    };

    const isTab = useMediaQuery({ query: "(max-width: 56.25em)" });

    useEffect(() => {
        async function fetchMyApi() {
            try {
                if (querySearch.length !== 0) {
                    const res = await searchAssetFMP(querySearch, 50);
                    // console.log(res);
                    if (res.statusText === "OK") {
                        if (querySearch.length > 0) {
                            setResults(res.data);
                        } else {
                            setResults([]);
                        }
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchMyApi();
    }, [querySearch]);

    return (
        <>
            {isTab && (
                <SearchSvg
                    type="button"
                    onClick={() => {
                        setIsSearch(true);
                    }}
                />
            )}

            {(!isTab || isSearch) && (
                <SearchBar ref={searchRef}>
                    <SearchInput
                        type="text"
                        placeholder="Search for stocks by name or symbol"
                        value={querySearch}
                        id="query_search"
                        onChange={(e) => {
                            setQuerySearch(e.target.value);
                        }}
                    />
                    {(querySearch.length > 0 || isSearch) && (
                        <CloseSearch
                            onClick={() => {
                                setQuerySearch("");
                                if (isSearch) {
                                    setIsSearch(false);
                                }
                            }}
                        />
                    )}

                    {querySearch.length > 0 && (
                        <Suggestions>
                            {/* <span>Closest Search</span> */}
                            {results.map((result) => {
                                const { name, symbol, exchangeShortName } =
                                    result;
                                return (
                                    <Suggestion
                                        key={`${name},${symbol}`}
                                        id={`${name},${symbol}`}
                                        onClick={() => {
                                            handleSuggestionClick(symbol);
                                            if (isSearch) {
                                                setIsSearch(false);
                                            }
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: "max-content",
                                                textAlign: "match-parent",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontWeight: "400",
                                                    marginRight: ".5rem",
                                                }}
                                            >
                                                {name}
                                            </span>{" "}
                                            <span
                                                style={{
                                                    fontSize: "1.4rem",
                                                    color: "rgb(var(--color-green-special))",
                                                    marginRight: "1rem",
                                                }}
                                            >
                                                {symbol}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "1.4rem",
                                                    color: "#109bf0",
                                                }}
                                            >
                                                {exchangeShortName}
                                            </span>
                                        </span>{" "}
                                    </Suggestion>
                                );
                            })}
                        </Suggestions>
                    )}
                </SearchBar>
            )}
        </>
    );
}

AssetSearch.propTypes = {
    setTicker: PropTypes.func.isRequired,
};
