#!/usr/bin/env node
const koa = require("koa")
const static = require("koa-static")
const { DEFAULT_DIST, PORT } = require("./config/index.js")
const allow = require("./config/allow-instructions.js")
const { resolve, openBrowser } = require("./utils/index.js")
const args = process.argv.slice(2)
const allowInfo = {}
for (let i = 0; i < args.length; i++) {
    if (allow[args[i]] && args[i + 1]) {
        allowInfo[args[i]] = args[i + 1]
    }
}
const port = allowInfo["-p"] || PORT
const dist = allowInfo["-d"] || DEFAULT_DIST
if (args.includes("-o")) {
    openBrowser(`http://localhost:${port}`)
}
const app = new koa()
app.use(static(resolve(dist)))
app.listen(port, () => {
    console.log(`the static server is running in port ${port}`)
})
