import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$src: resolve('./src'),
			$lib: resolve('./src/lib'),
			$stores: resolve('./src/stores'),
			$assets: resolve('./src/assets')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
