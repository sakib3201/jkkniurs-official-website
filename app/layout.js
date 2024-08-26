import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JKKNIURS",
  description: "JKKNIU RS Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
