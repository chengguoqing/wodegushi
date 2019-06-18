//https://mall.cangniaowl.com/static_story
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://mall.cangniaowl.com/static_story' : './',
    productionSourceMap: false,
    devServer: { //跨域 
        open: true, //配置自动启动浏览器
        proxy: {
            '/adminconsole': { //将www.exaple.com印射为/apis
                target: 'http://192.168.0.10', // 接口域名
                changeOrigin: true //是否跨域
            }
        }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            template: process.env.NODE_ENV === 'production' ? 'public/index.html' : 'public/kaifa.html',
            filename: 'index.html',
            // 当使用 title 选项时，
            title: 'Index Page'
        }
    }

}
