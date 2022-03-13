module.exports = {
    server: "public",
    files: [
        {
            match: ['public/**/*'],
            fn:    function (event, file) {
                this.reload()
            },
        },
    ],
    injectChanges: false,
    open: false,
    notify: false
}