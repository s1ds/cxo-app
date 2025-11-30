import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "CXO Knowledge Service",
    description: "Automated intelligence for the modern executive.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} bg-background text-text-primary font-sans antialiased flex`}>
                <Sidebar />
                <div className="flex-1 h-screen overflow-y-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}
