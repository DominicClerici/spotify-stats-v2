import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background font-sans text-main/80`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
