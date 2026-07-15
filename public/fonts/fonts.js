import { Great_Vibes } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { VT323 } from "next/font/google";

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
export const vt = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
