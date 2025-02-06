import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={montserrat.variable}>
            <body>{children}</body>
        </html>
    );
}
