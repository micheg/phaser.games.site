import { defineConfig } from 'vite';

/* jshint esversion: 6 */
const path = require('path');

export default defineConfig({
//    root: path.resolve(__dirname, 'src'),
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    }
});
