// import { MarkerClusterer } from "@react-google-maps/api";
import React, { useEffect } from "react";

import { getGeocode, getLatLng } from "use-places-autocomplete";

import stockExchanges from "../../../dev-data/stockExchanges";

const UsePlaces = () => {
    const markers = stockExchanges;

    useEffect(() => {
        let timeOut;
        async function geoCodeData() {
            try {
                // const geoData = markers;

                markers.forEach(async (marker, index) => {
                    if (
                        marker &&
                        marker.name &&
                        marker.city &&
                        marker.country
                    ) {
                        timeOut = setTimeout(async () => {
                            const address = `${marker.name},${marker.city},${marker.country}`;

                            const results = await getGeocode({ address });

                            const { lat, lng } = await getLatLng(results[0]);

                            // marker.lat = lat;
                            // marker.lng = lng;

                            marker.address = results[0].formatted_address;
                            marker.coordinates = { lat, lng };
                        }, index * 1000);
                    }
                });
                // setTimeout(() => {
                //     console.log(JSON.stringify(markers));
                // }, 120000);
            } catch (err) {
                console.log("😱 Error: ", err);
            }
        }
        geoCodeData();

        return () => {
            clearTimeout(timeOut);
        };
    }, []);
    return <div>{}</div>;
};

export default UsePlaces;
