// This file has all of the 'white listed' websites that the server can get data like images from, so this is very important to configure.

// Also the image component lazily loads, so the initial load of the page is fast, but then the pictures are loaded in as you scroll down.

module.exports = {
    images: {
        domains: ['images.ctfassets.net']
    }
}