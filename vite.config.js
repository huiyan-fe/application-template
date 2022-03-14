import common from '../../scripts/vite.common';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(common, {
    plugins: [react()],
});
