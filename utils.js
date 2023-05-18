const path = require("path")
const resolve = (ppath) => {
    return path.resolve(process.cwd(), ppath)
}
module.exports = {
    resolve,
}
