export default [
    {
        featureType: "all",
        elementType: "all",
        stylers: [
            {
                invert_lightness: true,
            },
            {
                saturation: 10,
            },
            {
                lightness: 30,
            },
            {
                gamma: 0.5,
            },
            {
                hue: "#435158",
            },
        ],
    },
    {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [
            {
                color: "#1f2033",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
            {
                color: "#2451b7",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [
            {
                visibility: "off",
            },
        ],
    },
    {
        featureType: "transit.station",
        elementType: "all",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "all",
        stylers: [
            {
                visibility: "on",
            },
        ],
    },
];
