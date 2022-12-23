const chokidar = require('chokidar');
const { writeFile, mkdir, readFileSync, rm } = require('fs');
const { renderSync } = require('sass');
const glob = require('glob');
const args = process.argv.slice(2);

if (args[0] === 'dev') {
    makeDir('./public', 'addDir');
    setTimeout(e => {
        chokidar.watch('./src').on('all', (event, path) => {
            console.log(event);
            compile(path, event);
        });
    }, 100);
} else {
    makeDir('./public', 'addDir');
    setTimeout(e => {
        glob('src/**/*', (err, paths) => {
            paths.forEach(path => {
                let event = path.includes('.') ? 'add' : 'addDir';
                compile(path, event);
            });
        });
    }, 100);
}

function compile(path, event) {
    let newPath = path.replace(/\\/g, '/').replace('src', './public').replace('/sass', '/css');
    if (event === 'addDir') {
        return makeDir(newPath, event);
    }
    if (event === 'unlinkDir') {
        return deleteDir(newPath, event);
    }
    if (event === 'unlink') {
        return deleteDir(newPath, event);
    }
    if (path.includes('.scss')) {
        const result = renderSync({ file: path });
        return writeFile_custom(newPath.replace('.scss', '.css'), result.css, 'sass compile');
    }
    if (path.includes('.ts')) return;
    const data = readFileSync(path);
    writeFile_custom(newPath, data, event);
}

function deleteDir(path, event) {
    rm(path, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`${event} ${path}`);
    });
}

function makeDir(path, event) {
    mkdir(path, { recursive: true }, (err) => {
        if (err) throw err;
        console.log(`${event} ${path}`);
    });
}
function writeFile_custom(path, data, event) {
    writeFile(path, data, (err) => {
        if (err) throw err;
        console.log(`${event} ${path}`);
    });
}