import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { auth } from "@/services/auth";

const font = Montserrat({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "NexoGG",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	
	return (
		<html lang="pt-BR">
			<body className={`${font.className} antialiased`} >
				<Providers session={session}>
					{children}
				</Providers>
			</body>
		</html>
	);
}
