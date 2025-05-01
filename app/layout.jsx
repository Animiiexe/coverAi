import "./global.css";


import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  title: "Cover AI",
  description: "AI Thumbnail Image Generator",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        {/* Header */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}