import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
    title: "CXO Knowledge Service",
    description: "Executive Intelligence Platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans bg-corporate-slate text-corporate-text`}>
                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex-1 ml-[250px] p-8 overflow-y-auto h-screen">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
