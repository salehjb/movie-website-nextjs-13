import "./globals.css";
import { Montserrat } from "next/font/google"

export const metadata = {
  title: "Movie App",
}

const montserrat = Montserrat({
  weight: ["400", "700"],
  subset: ["latin"],
  preload: false,
  variable: "--font-montserrat"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-10 my-12 sm:mx-32`}>{children}</body>
    </html>
  )
}
