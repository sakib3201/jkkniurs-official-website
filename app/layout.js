import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './navigation/navigation';
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
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Navigation />
            <main className="my-0 py-16">
              {children}
            </main>
          </div>
          <Footer />
        </div>        
      </body>
    </html>
  );
}
