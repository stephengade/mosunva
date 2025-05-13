import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mosunmola Ajayi | Virtual Assistant",
  description:
    "Professional virtual assistant with legal expertise, providing administrative support and business solutions.",
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
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
