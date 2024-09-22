import { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import favicon from "../../public/favicon.ico";
import "./globals.css";

export const metadata: Metadata = {
  title: "CryptoTrack Pro",
  description:
    "Track cryptocurrency prices, market caps, and more in real-time.",
  keywords: "cryptocurrency, bitcoin, ethereum, blockchain, trading, finance",
  authors: [{ name: "Barron" }],
  creator: "Your Company Name",

  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="">{children}</main>
          <footer className="bg-primary text-primary-foreground py-4 mt-8">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 CryptoTrack Pro. All rights reserved.</p>
            </div>
          </footer>
        </NextThemesProvider>
      </body>
    </html>
  );
}
