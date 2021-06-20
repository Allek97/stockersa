import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import useOuterClick from "../../utils/UseOuterClick";
import { searchAssetTiingo } from "../../utils/StockApiConnectorTiingo";
import {
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

    useOuterClick(searchRef, () => setQuerySearch(""));

    const handleSuggestionClick = (ticker) => {
        setTicker(ticker);
        setQuerySearch("");
    };

    useEffect(() => {
        async function fetchMyApi() {
            try {
                if (querySearch.length !== 0) {
                    const res = await searchAssetTiingo(querySearch, "50");
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
        <SearchBar ref={searchRef}>
            <SearchInput
                type="text"
                placeholder="Search by an asset name or an asset shortcut..."
                value={querySearch}
                id="query_search"
                onChange={(e) => {
                    setQuerySearch(e.target.value);
                }}
            />
            {querySearch.length > 0 && (
                <CloseSearch onClick={() => setQuerySearch("")} />
            )}

            {querySearch.length > 0 && (
                <Suggestions>
                    {/* <span>Closest Search</span> */}
                    {results.map((result) => {
                        const { name, ticker } = result;
                        return (
                            <Suggestion
                                key={`${name},${ticker}`}
                                id={`${name},${ticker}`}
                                onClick={() => {
                                    handleSuggestionClick(ticker);
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
                                        }}
                                    >
                                        {ticker}
                                    </span>
                                </span>{" "}
                            </Suggestion>
                        );
                    })}
                </Suggestions>
            )}
        </SearchBar>
    );
}

AssetSearch.propTypes = {
    setTicker: PropTypes.func.isRequired,
};
