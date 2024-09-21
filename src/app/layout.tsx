import QueryProvider from "@/components/providers/query-provider";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
          <QueryProvider>{children}</QueryProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
