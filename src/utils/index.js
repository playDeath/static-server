const path = require("path")
const { exec } = require("child_process")
const resolve = (ppath) => {
    return path.resolve(process.cwd(), ppath)
}
const openBrowser = (url) => {
    // 根据操作系统不同，使用不同的命令打开默认浏览器
    const openCommand = process.platform === "win32" ? "start" : "open"
    // 执行命令打开浏览器窗口
    exec(`${openCommand} ${url}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行命令时出错：${error}`)
            return
        }
        console.log(`open browser`)
    })
}
module.exports = {
    resolve,
    openBrowser
}
