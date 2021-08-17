/* eslint-disable global-require */
/* eslint-disable camelcase */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";

import { ImLocation2 } from "react-icons/im";
import { RiCloseFill } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

import {
    SearchContainer,
    SearchBar,
    SearchSuggestionsList,
    SearchSuggestion,
} from "../styles/StockMapStyles";

const Search = (props) => {
    const {
        setSearchCoordinates,
        setSearchAddress,
        setIsSearchMarkerVisible,
        setCenter,
        setZoom,
        assetAddress,
        setAssetCoordinates,
        setIsAssetMarkerVisible,
    } = props;

    const {
        ready,
        value,
        suggestions: { data, status },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 45.518465, lng: () => -73.712678 },
            radius: 200 * 1000,
        },
    });

    const searchSvg = require("../../../assets/svgs/search.svg").default;

    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    useEffect(() => {
        async function getCoordinates() {
            try {
                if (assetAddress) {
                    const results = await getGeocode({ address: assetAddress });
                    const { lat, lng } = await getLatLng(results[0]);

                    setAssetCoordinates({ lat, lng });
                    setIsAssetMarkerVisible(true);
                    setZoom((current) => {
                        if (current === 12) {
                            return 13;
                        }
                        return 12;
                    });
                    setCenter({ lat, lng });
                }
            } catch (err) {
                console.log(err);
            }
        }

        getCoordinates();
    }, [assetAddress]);

    const handleSelect =
        ({ description }) =>
        async () => {
            try {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();

                const results = await getGeocode({ address: description });
                const { lat, lng } = await getLatLng(results[0]);

                setZoom((current) => {
                    if (current === 12) {
                        return 13;
                    }
                    return 12;
                });
                // forceUpdate();
                setSearchCoordinates((current) => ({
                    ...current,
                    lat,
                    lng,
                }));
                setCenter({ lat, lng });
                setIsSearchMarkerVisible(true);
                setSearchAddress(description);

                // console.log(lat, lng);
            } catch (error) {
                console.log("😱 Error: ", error);
            }
        };

    return (
        <SearchContainer ref={ref}>
            <IoMdSearch className="google-map-search-svg" />
            <SearchBar
                id="address"
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Search For A Place..."
                required
                style={
                    status === "OK"
                        ? {
                              borderBottomLeftRadius: "0",
                              borderBottomRightRadius: "0",
                          }
                        : null
                }
                svg={searchSvg}
            />
            <RiCloseFill
                className="google-map-close-svg"
                onClick={() => {
                    setValue("");
                }}
            />

            {/* NOTE: We can de-construct element directly from map function */}
            {status === "OK" && (
                <SearchSuggestionsList>
                    {data.map((suggestion) => {
                        const {
                            structured_formatting: {
                                main_text,
                                secondary_text,
                            },
                        } = suggestion;
                        return (
                            //  eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <SearchSuggestion
                                key={`${main_text},${secondary_text}`}
                                id={`${main_text},${secondary_text}`}
                                role="button"
                                tabIndex={0}
                                onClick={handleSelect(suggestion)}
                                onKeyDown={() => {}}
                            >
                                <ImLocation2 />
                                <div>
                                    <span
                                        style={{
                                            fontWeight: "600",
                                            marginRight: "2px",
                                        }}
                                    >
                                        {main_text}
                                    </span>{" "}
                                    <span
                                        style={{
                                            fontSize: "1.3rem",
                                        }}
                                    >
                                        {secondary_text}
                                    </span>
                                </div>{" "}
                            </SearchSuggestion>
                        );
                    })}
                </SearchSuggestionsList>
            )}
        </SearchContainer>
    );
};

Search.propTypes = {
    setSearchCoordinates: PropTypes.func.isRequired,
    setSearchAddress: PropTypes.func.isRequired,
    setIsSearchMarkerVisible: PropTypes.func.isRequired,
    setCenter: PropTypes.func.isRequired,
    setZoom: PropTypes.func.isRequired,
    assetAddress: PropTypes.string.isRequired,
    setAssetCoordinates: PropTypes.func.isRequired,
    setIsAssetMarkerVisible: PropTypes.func.isRequired,
};

export default Search;
