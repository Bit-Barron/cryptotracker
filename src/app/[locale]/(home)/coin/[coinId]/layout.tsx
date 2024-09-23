import { fetchCoins, fetchCoinsId } from "@/lib/fetch-coins";
import getQueryClient from "@/lib/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function CoinIdLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const queryClient = getQueryClient();

  const initialCoins = await fetchCoins();

  const firstCoinId = initialCoins[0]?.id;

  queryClient.prefetchQuery({
    queryKey: ["coin", "market_cap_desc", 1],
    queryFn: async () => await fetchCoinsId(firstCoinId),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </div>
  );
}
