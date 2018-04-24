#!/usr/bin/env node

const config = require("./lib/config");
const manifestFactory = require("./lib/manifest");

// a mock for a config, a package.json hash or command line arguments
// const directives = [
//     "test-project/media/alphabet-arts-and-crafts-blog-459688-worked.jpg:1:test-project/media",
//     "test-project/media/black-and-white-close-up-cobweb-worked.jpg:1:test-project/media",
//     "test-project/media/cyclone-roller-coaster-coney-island-worked.jpg:1:test-project/media",
//     "test-project/media/tatoo-handshake-worked.jpg:1:test-project/media",
//     "test-project/index.html:2:test-project",
//     "test-project/css/test.css:3:test-project/css",
//     "test-project/script/test.js:3:test-project/script"
// ];

// const config = {
//     directives: directives,
//     options: {
//         // where to save the manifest, defaults to cwd
//         manifestDest: "./manifest.json",
//         // rename backup files  and delete generated hash files
//         restore: true,
//         // dry run only
//         dryRun: false
//     }
// };

const processBuster = () => {
    console.log("processing started");
    const userConfig = config();

    if (!userConfig) {
        console.log("no valid configuration found");
        console.log("terminating process");
        process.exit();
    }

    // manifestFactory()(config.directives, config.options);
    manifestFactory()(userConfig.directives, userConfig.options);
    console.log("processing completed");
};

// it all starts here
processBuster();
