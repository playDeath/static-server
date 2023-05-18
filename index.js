#!/usr/bin/env node
const koa = require("koa")
const static = require("koa-static")
const { DEFAULT_DIST, PORT } = require("./config.js")
const { resolve } = require("./utils")
const app = new koa()
app.use(static(resolve(DEFAULT_DIST)))
app.listen(PORT, () => {
    console.log(`the static server is running in port ${PORT}`)
})
