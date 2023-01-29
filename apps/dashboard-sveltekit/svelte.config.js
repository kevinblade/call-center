import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import route from './src/route.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

		files: {
			routes: `src/routes/${route.folder}`,
			hooks: {
				server: `src/hooks/${route.hooks}.ts`
			}
		}
  }
};

export default config;
