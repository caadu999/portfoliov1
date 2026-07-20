import { Great_Vibes } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Geist } from "next/font/google";
import { Anton } from "next/font/google";
import localFont from "next/font/local";

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const great = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
