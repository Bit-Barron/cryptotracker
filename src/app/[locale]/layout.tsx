import { Navbar } from "@/components/pages/container/navbar";
import QueryProvider from "@/components/providers/query-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <QueryProvider>
        <Navbar />
        {children}
      </QueryProvider>
    </NextIntlClientProvider>
  );
}
