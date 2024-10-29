import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				codefont: ['Source Code Pro', 'monospce']
			}
		}
	},

	plugins: []
} satisfies Config;
