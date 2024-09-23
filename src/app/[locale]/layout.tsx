import { Navbar } from "@/components/pages/container/navbar";
import QueryProvider from "@/components/providers/query-provider";
import { fetchCoinData, fetchCoins } from "@/lib/fetch-coins";
import getQueryClient from "@/lib/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
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
  const queryClient = getQueryClient();

  const initialCoins = await fetchCoins();
  queryClient.setQueryData(["coin", "market_cap_desc", 1], initialCoins);

  const firstCoinId = initialCoins[0]?.id;
  if (firstCoinId) {
    const coinData = await fetchCoinData(firstCoinId);
    queryClient.setQueryData(["coin", firstCoinId], coinData);
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <QueryProvider>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Navbar />
          {children}
        </HydrationBoundary>
      </QueryProvider>
    </NextIntlClientProvider>
  );
}
