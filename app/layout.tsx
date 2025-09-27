import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shepherd K. Mhlanga - PSV/HGV Mechanic & Electric Vehicle Specialist",
  description:
    "Professional PSV/HGV Mechanic with 5+ years experience in vehicle maintenance, electric vehicle technology, and data analytics. Based in Northern Ireland.",
  generator: "v0.app",
  keywords: ["PSV Mechanic", "HGV Mechanic", "Electric Vehicle Technology", "Vehicle Maintenance", "Northern Ireland"],
  authors: [{ name: "Shepherd K. Mhlanga" }],
  openGraph: {
    title: "Shepherd K. Mhlanga - PSV/HGV Mechanic",
    description: "Professional mechanic specialising in buses, trucks, and electric vehicle technology",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
