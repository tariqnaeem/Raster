const chalk = require('chalk');
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');


const BUILD_FOLDER = path.join(process.cwd(), 'build', 'static');
const BUILD_CSS_FOLDER = path.join(BUILD_FOLDER, '/css/*');
const BUILD_JS_FOLDER = path.join(BUILD_FOLDER, '/js/*');
const IPACT_PUBLIC_FOLDER = path.resolve(process.cwd(), 'public');
const IPACT_JS_FOLDER = path.join(IPACT_PUBLIC_FOLDER, 'js/');
const IPACT_CSS_FOLDER = path.join(IPACT_PUBLIC_FOLDER, 'css/');

const IPACT_CSS_NAME = 'raster.css';
const IPACT_JS_NAME = 'raster.js';

const FILES_TO_COPY = [
    {
        "file": path.join(BUILD_FOLDER, '/css/*.css'),
        "dest": IPACT_CSS_FOLDER + IPACT_CSS_NAME
    },
    {
        "file": path.join(BUILD_FOLDER, '/js/*.js'),
        "dest": IPACT_JS_FOLDER + IPACT_JS_NAME
    }
];
const isMapFile = (filePath) => (path.extname(filePath) === '.map') === true;

const copyFile = (file, dest) => {
    fs.copy(file, dest, err => {
        if (err) return console.error(err)
        console.log(chalk.green('Successfully moved: ') + chalk.cyan(file) + ' to: ' + chalk.cyan(dest))
    });
}

const removeFile = (file) => {
    fs.unlink(file, err => {
        if (err) return console.error(err);
        console.log(chalk.red('Successfully removed: ') + chalk.cyan(file))
    });
}
const removeMapFile = (file) => glob(file, (err, files) => removeFile(files[0]));

const copyFiles = (file, dest) => glob(file, (err, files) => {
    copyFile(files[0], dest);
});

FILES_TO_COPY.forEach((item) => copyFiles(item.file, item.dest));
