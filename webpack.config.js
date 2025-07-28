const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    entry: {
        index: './src/index.js',
        editor: './src/editor.css',
        style: './src/style.css',
        frontend: './src/frontend.js' // ✅ our missing piece
    }
};