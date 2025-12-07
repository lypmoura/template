import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.pinimg.com",
			},
			{
				protocol: "https",
				hostname: "cdn.ggmax.com.br",
			},
		],
	},
};

export default nextConfig;
