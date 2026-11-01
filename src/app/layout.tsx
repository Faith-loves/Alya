import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-display", weight: "400" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = { title: "Alya — A softer way to get your life together", description: "A private, local-first personal life operating system." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${serif.variable} ${sans.variable}`}><Providers>{children}</Providers></body></html>;
}
