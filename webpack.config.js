module.exports={
    entry:"./Scraper.js",
    output:{
        path: __dirname +"/dist",
        filename:"Scraper.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    externals: ['tls', 'net', 'fs']
}