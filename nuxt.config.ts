// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			bodyAttrs: {
				class: 'g-sidenav-show bg-gray-100'
			},
			script: [
				{
				src: "https://kit.fontawesome.com/42d5adcbca.js",
				type: "text/javascript",
				},
				{
				src: "https://unpkg.com/@popperjs/core@2",
				type: "text/javascript",
				},
				{
				src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
				type: "text/javascript",
				},
				{
				src: "https://cdn.jsdelivr.net/npm/chart.js",
				type: "text/javascript",
				},
			],
		},
	},
	css: [
		'@/assets/css/main.css',
		'@/assets/css/nucleo-icons.css',
		'@/assets/css/custom.css',
	],
	plugins: [
		// {
		// 	src: '~/plugins/chart.js', mode: 'client'
		// },
		// '@/plugins/js/core/popper.min.js',
		// '@/plugins/js/core/bootstrap.min.js',
		// '@/plugins/js/soft-ui-dashboard.js',
	],
	modules: [
		'nuxt-icon',
		[
			'@nuxtjs/robots',
			{
				userAgent: '*',
				Disallow: '',
			}
		],
	],
})
