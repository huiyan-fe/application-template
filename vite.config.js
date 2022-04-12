/**
 * @file vite配置
 * @author hedongran [hdr01@126.com]
 */

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import createHtmlPlugin from 'vite-plugin-html';
import imp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {

    const defineValue = {
        'development': {
            publicPath: '/',
        },
        'production': {
            publicPath: '/',
        },
    };

    return {
        base: defineValue[mode].publicPath,
        plugins: [
            react(),
            legacy(),
            createHtmlPlugin({
                inject: {
                    data: {
                        injectScript: '',
                    },
                },
                minify: true,
            }),
            imp({
                libName: 'antd',
                style(name) {
                    return `antd/es/${name}/style/css.js`;
                },
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
    };
});
