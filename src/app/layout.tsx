import QueryProvider from "@/components/providers/query-provider";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Navbar } from "@/components/elements/navbar";

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
          <Navbar />
          <QueryProvider>{children}</QueryProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
