import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const intrudingCat = localFont({
  src: "./fonts/IntrudingCat.woff2",
  variable: "--font-intruding-cat",
});