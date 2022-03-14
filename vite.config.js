import {commonPlugins, commonEsbuild, commonCss} from '../../scripts/vite.common';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        ...commonPlugins,
    ],
    esbuild: {
        ...commonEsbuild,
    },
    css: {
        ...commonCss,
    },
});
