/**
 * Created by elven on 17-4-28.
 */
module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口
    output: {
        path: __dirname + "/public", //打包後大文件存放的地方
        filename: "bundle.js"
    }
};