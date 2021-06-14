const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const request = require("request");
const catchAsyncError = require("./utils/catchAsyncError");

const app = express().use("*", cors({ origin: true, credentials: true }));

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use("/static", express.static(path.join(__dirname, "../client/public/")));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against XSS
app.use(xss());

app.get("/api/tiingo/", (req, res) => {
    const { url } = req.query;
    const requestOptions = {
        url: decodeURI(url),
        headers: {
            "Content-Type": "application/json",
        },
    };

    request(requestOptions, (error, response, body) => {
        if (error) {
            res.json({
                status: "error",
                message: "Something wrong in Tiingo url query",
                error,
            });
        }
        res.send(body);
    });
});

module.exports = app;
