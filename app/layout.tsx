import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/services/auth";

const font = Montserrat({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Felype Moura - Boilerplate",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth()
	return (
		<html lang="en">
			<body
				className={`${font.className} antialiased`}
			>
				<SessionProvider session={session}>
					{children}
				</SessionProvider>
			</body>
		</html>
	);
}
