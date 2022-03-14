import {commonPlugins, commonCss} from '../../scripts/vite.common';
import {defineConfig} from 'vite';

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
            ...commonPlugins,
        ],
        css: {
            ...commonCss,
        },
    };
});
