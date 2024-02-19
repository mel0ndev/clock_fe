import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Bruno_Ace } from "next/font/google";
import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers"; 
import { NextProviders } from "./next-providers"

const brunoAce = Bruno_Ace({
	weight: '400',
	variable: "--font-bruno",
	preload: false,
});

const notoSans = Noto_Sans({
	weight: '400',
	variable: "--font-noto",
	subsets: ['latin']
}); 

export const metadata = {
  title: "$CLOCK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		<body className={`${notoSans.variable} ${brunoAce.variable}`}>
			<ThemeProvider
			   attribute="class"
    		   defaultTheme="dark"
    		 >
				<Providers> 
					<NextProviders>
						{children}
					</NextProviders>
				</Providers>
			</ThemeProvider>
		</body>
    </html>
  );
}
