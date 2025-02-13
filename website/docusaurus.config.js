const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: 'System Design Tutorial',
		tagline: 'Curated guide to help you master system design concepts',
		url: 'https://systemdesigntutorial.com',
		baseUrl: '/',
		onBrokenLinks: 'warn',
		onBrokenMarkdownLinks: 'warn',
		favicon: 'img/favicon.ico',
		organizationName: 'kapilgupta101292', // Usually your GitHub org/user name.
		projectName: 'system-design-tutorial', // Usually your repo name.

		presets: [
			[
				'@docusaurus/preset-classic',
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						routeBasePath: '/',
						sidebarPath: require.resolve('./sidebars.js'),
						// Please change this to your repo.
						editUrl:
							'https://github.com/kapilgupta101292/system-design-tutorial/edit/master/website',
					},
					blog: false,
					theme: {
						customCss: require.resolve('./src/css/custom.css'),
					},
				}),
			],
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				navbar: {
					title: 'System Design Tutorial',
					logo: {
						alt: 'System Design Tutorial Logo',
						src: 'img/logo.png',
					},
					items: [
						{ href: '/', label: 'System Design', position: 'right' },
						{
							to: 'sde-interview-prep',
							label: 'SDE Interview Preparation',
							position: 'right',
						},
						{
							href: '/contributing',
							label: 'Contribute',
							position: 'right',
						},
						{
							href: 'https://github.com/kapilgupta101292/system-design-tutorial',
							label: 'GitHub',
							position: 'right',
						},
					],
				},
				footer: {
					style: 'dark',
					links: [
						{
							title: 'Docs',
							items: [
								{
									label: 'System Design',
									to: '/',
								},
								{
									label: 'SDE Interview Preparation',
									to: '/sde-interview-prep',
								},
								{
									label: 'Contribute',
									to: '/contributing',
								},
							],
						},
						{
							title: 'Community',
							items: [
								{
									label: 'Discord',
									href: 'https://discord.gg/dWxCK46ZPT',
								},
								{
									label: 'GitHub',
									href: 'https://github.com/kapilgupta101292/system-design-tutorial',
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} System Design Tutorial. Built with Docusaurus.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	}
);
