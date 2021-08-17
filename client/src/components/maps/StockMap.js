/* eslint-disable camelcase */
/* eslint-disable global-require */
// TODO: Use this componant for future map building
// NOTE: https://www.youtube.com/watch?v=WZcxJGmLbSo

import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    StreetViewPanorama,
    InfoWindow,
} from "@react-google-maps/api";

import { SiWebmoney } from "react-icons/si";
import { GiPayMoney } from "react-icons/gi";
import { MdLocationCity } from "react-icons/md";
import { RiTimeFill } from "react-icons/ri";

import Search from "./components/Search";

import styleModest from "./styles/mapStyles/styleCustom2";
import {
    MapInfoSearch,
    MapTitle,
    InfoWindowStyle,
} from "./styles/StockMapStyles";

import { ReactComponent as LogoSvg } from "../../assets/svgs/asset.svg";

import stockExchangeData from "../../dev-data/stockExchanges";

// Google variables

const mapContainerStyle = {
    display: "block",
    width: "100%",
    height: "80rem",
    // boxShadow: "var(--shadow-light)",
    // border: "1px solid #142d69",
    // borderRadius: "2em",
};

// const center = {
//     lat: 45.493275,
//     lng: -73.6784,
// };

// const libraries = ["places"];
export default function StockMap({ assetAddress, assetName }) {
    const [libraries] = useState(["places"]);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
        id: "stockersa",
    });

    const markers = stockExchangeData;

    // hooks
    const [center, setCenter] = useState({
        lat: 40.733146,
        lng: -73.994402,
    });
    const [markerInfoWindow, setMarkerInfoWindow] = useState(null);

    // NOTE: hooks for map search bar
    const [searchCoordinates, setSearchCoordinates] = useState({
        lat: 0,
        lng: 0,
    });
    const [searchAddress, setSearchAddress] = useState("");
    const [isSearchMarkerVisible, setIsSearchMarkerVisible] = useState(false);
    // NOTE: hooks for the searched asset
    const [assetCoordinates, setAssetCoordinates] = useState({
        lat: 0,
        lng: 0,
    });
    const [isAssetMarkerVisible, setIsAssetMarkerVisible] = useState(false);

    const [zoom, setZoom] = useState(13);

    const renderMap = () => {
        // NOTE: For styling maps : https://snazzymaps.com

        // const center = {
        //     lat: startLocation.coordinate.lat] ||  45.493275,
        //     lng: startLocation.coordinate.lat] || -73.6784,
        // };

        const options = {
            styles: styleModest,
            disableDefaultUI: false,
            zoomControl: true,
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.LEFT_BOTTOM,
            },
            streetViewControlOptions: {
                position: window.google.maps.ControlPosition.TOP_RIGHT,
            },
            mapTypeControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_TOP,
            },
            fullscreenControlOptions: {
                position: window.google.maps.ControlPosition.BOTTOM_LEFT,
            },
        };

        const panoramaOptions = {
            enableCloseButton: true,
            zoomControl: true,
            addressControlOptions: {
                position: window.google.maps.ControlPosition.LEFT_CENTER,
            },
            panControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_TOP,
            },
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_TOP,
            },
        };

        return (
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={zoom}
                center={center}
                options={options}
            >
                <MapInfoSearch>
                    <div>
                        <MapTitle>
                            <LogoSvg
                                style={{ width: "3rem", marginRight: "1rem" }}
                            />
                            Stocks Exchanges Around The Globe
                        </MapTitle>
                    </div>
                    <Search
                        setSearchCoordinates={setSearchCoordinates}
                        setSearchAddress={setSearchAddress}
                        setIsSearchMarkerVisible={setIsSearchMarkerVisible}
                        setCenter={setCenter}
                        setZoom={setZoom}
                        assetAddress={assetAddress}
                        setAssetCoordinates={setAssetCoordinates}
                        setIsAssetMarkerVisible={setIsAssetMarkerVisible}
                    />
                </MapInfoSearch>
                <StreetViewPanorama options={panoramaOptions} />
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.name}_${marker.acronym}_${marker.country}`}
                        position={{
                            lat: marker.coordinates.lat,
                            lng: marker.coordinates.lng,
                        }}
                        icon={{
                            url: require("../../assets/svgs/placeholder.svg")
                                .default,
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                        title={marker.name}
                        onClick={() => {
                            setMarkerInfoWindow(marker);
                            setCenter({
                                lat: marker.coordinates.lat,
                                lng: marker.coordinates.lng,
                            });
                        }}
                    />
                ))}

                {markerInfoWindow && (
                    <InfoWindow
                        position={{
                            lat: markerInfoWindow.coordinates.lat,
                            lng: markerInfoWindow.coordinates.lng,
                        }}
                        options={{
                            pixelOffset: new window.google.maps.Size(0, -30),
                        }}
                        onCloseClick={() => setMarkerInfoWindow(null)}
                        backgroundColor="red"
                    >
                        <div
                            style={{
                                // height: "2rem",
                                width: "max-content",

                                color: "rgba(0,0,0,0.7)",
                            }}
                        >
                            <h3
                                style={
                                    markerInfoWindow.website
                                        ? {
                                              fontSize: "2.2rem",
                                              fontWeight: "600",
                                              marginBottom: "1rem",
                                          }
                                        : null
                                }
                            >
                                {markerInfoWindow.name} (
                                {markerInfoWindow.acronym})
                            </h3>
                            <InfoWindowStyle style={{ alignItems: "flex-end" }}>
                                <MdLocationCity />
                                <span
                                    target="_blank"
                                    href={`//${markerInfoWindow.website}`}
                                    rel="noreferrer"
                                >
                                    {markerInfoWindow.address}
                                </span>
                            </InfoWindowStyle>
                            {markerInfoWindow.website && (
                                <InfoWindowStyle>
                                    <SiWebmoney />
                                    <a
                                        target="_blank"
                                        href={`//${markerInfoWindow.website}`}
                                        rel="noreferrer"
                                    >
                                        {markerInfoWindow.website}
                                    </a>
                                </InfoWindowStyle>
                            )}
                            <InfoWindowStyle>
                                <GiPayMoney />
                                <span
                                    target="_blank"
                                    href={`//${markerInfoWindow.website}`}
                                    rel="noreferrer"
                                >
                                    {markerInfoWindow.currency.name} (
                                    {markerInfoWindow.currency.symbol})
                                </span>
                            </InfoWindowStyle>
                            <InfoWindowStyle>
                                <RiTimeFill />
                                <span
                                    target="_blank"
                                    href={`//${markerInfoWindow.website}`}
                                    rel="noreferrer"
                                >
                                    {markerInfoWindow.timezone.timezone} (
                                    {markerInfoWindow.timezone.abbr})
                                </span>
                            </InfoWindowStyle>
                        </div>
                    </InfoWindow>
                )}
                {isSearchMarkerVisible && (
                    <Marker
                        position={{
                            lat: searchCoordinates.lat,
                            lng: searchCoordinates.lng,
                        }}
                        // icon={{
                        //     scaledSize: new window.google.maps.Size(40, 40),
                        // }}
                        title={searchAddress}
                        onClick={() => {
                            setCenter({
                                lat: searchCoordinates.lat,
                                lng: searchCoordinates.lng,
                            });
                        }}
                    />
                )}
                {isAssetMarkerVisible && (
                    <Marker
                        position={{
                            lat: assetCoordinates.lat,
                            lng: assetCoordinates.lng,
                        }}
                        icon={{
                            url: require("../../assets/imgs/headquarters.png")
                                .default,
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                        title={`${assetName} || ${assetAddress}`}
                        onClick={() => {
                            setCenter({
                                lat: assetCoordinates.lat,
                                lng: assetCoordinates.lng,
                            });
                        }}
                    />
                )}
            </GoogleMap>
        );
    };
    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return isLoaded ? (
        renderMap()
    ) : (
        <div>Map cannot be loaded right now, sorry.</div>
    );
}

//NOTE: Search

StockMap.propTypes = {
    assetAddress: PropTypes.string.isRequired,
    assetName: PropTypes.string.isRequired,
};
