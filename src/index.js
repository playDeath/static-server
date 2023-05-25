#!/usr/bin/env node
const fs = require("fs")
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
const app = new koa()
const configPath = resolve("static.config.js")
let config = null
if (fs.existsSync(configPath)) {
    config = require(resolve("static.config.js"))
}
app.use(
    static(resolve(dist), {
        setHeaders: (res) => {
            if (config && config.responseHeaders) {
                const resKeys = Object.keys(config.responseHeaders)
                resKeys.forEach((key) => {
                    res.setHeader(key, config.responseHeaders[key])
                })
            }
        },
    })
)
app.listen(port, () => {
    console.log(`the static server is running in port ${port}`)
    if (args.includes("-o")) {
        openBrowser(`http://localhost:${port}`)
    }
})
