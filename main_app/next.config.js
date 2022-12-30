/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: function (config, { isServer }) {
		// Your other webpack configs

		config.experiments = { ...config.experiments, asyncWebAssembly: true };

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
};

module.exports = nextConfig;
