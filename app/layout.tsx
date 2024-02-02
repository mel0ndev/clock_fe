import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans, Bruno_Ace } from "next/font/google";
import '@rainbow-me/rainbowkit/styles.css';
import { ThemeProvider } from "@/components/theme-provider"
import { Providers } from "./providers"; 

export const brunoAce = Bruno_Ace({
	weight: '400',
	variable: "--font-bruno",
	preload: false,
});

export const notoSans = Noto_Sans({
	weight: '400',
	variable: "--font-noto",
	subsets: ['latin']
}); 

export const metadata: Metadata = {
  title: "Clock Clock",
  description: "Time is running out...",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<ThemeProvider
		 	   attribute="class"
         	   defaultTheme="dark"
         	 >
						<body className={`${notoSans.variable} ${brunoAce.variable}`}>
							<Providers>
	  	 	   			  	  {children}
							</Providers>
	  	 	   			</body>
		 	</ThemeProvider>
    </html>
  );
}
