import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "next-themes"
import { NavHeader } from "@/components/nav-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mosunmola Ajayi | Virtual Assistant",
  description: "Professional virtual assistant with legal expertise, providing administrative support and business solutions.",
  keywords: ["Virtual Assistant", "Legal Expertise", "Administrative Support", "Business Solutions", "Professional Services"],
  authors: [{ name: "Mosunmola Ajayi" }],
  creator: "Mosunmola Ajayi",
  publisher: "Mosunmola Ajayi",
  openGraph: {
    title: "Mosunmola Ajayi | Virtual Assistant",
    description: "Professional virtual assistant with legal expertise, providing administrative support and business solutions.",
    url: "https://mosunva.vercel.app",
    siteName: "Mosunmola Ajayi",
    images: [
      {
        url: "https://mosunva.vercel.app/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mosunmola Ajayi - Virtual Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mosunmola Ajayi | Virtual Assistant",
    description: "Professional virtual assistant with legal expertise, providing administrative support and business solutions.",
    images: ["https://mosunva.vercel.app/og.jpg"],
    creator: "@stephen_olgade",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
             <NavHeader />
          {/* <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
