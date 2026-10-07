import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {CursorGlow} from "@/components/CursorGlow";
const inter=Inter({subsets:["latin"],variable:"--font-inter"});
export const metadata:Metadata={title:"Velora — Motion Studio",description:"Premium motion-first digital experiences."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.variable}><CursorGlow/><Navbar/>{children}<Footer/></body></html>}