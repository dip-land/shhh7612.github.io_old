module.exports = {
    pages : {
        'index' : {
            entry : './src/pages/home/main.js',
            template : 'public/index.html',
            title : 'Home',
            chunks : [ 'chunk-vendors', 'chunk-common', 'index' ]
        },
        'aika' : {
            entry : './src/pages/aika/main.js',
            template : 'public/index.html',
            title : 'Aika',
            chunks : [ 'chunk-vendors', 'chunk-common', 'aika' ]
        },
    }
}