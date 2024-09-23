import { fetchCoinsId } from "@/lib/fetch-coins";
import getQueryClient from "@/lib/react-query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function CoinIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { coinId: string };
}) {
  const queryClient = getQueryClient();

  const coinId = params.coinId;

  await queryClient.prefetchQuery({
    queryKey: ["coin", coinId],
    queryFn: async () => await fetchCoinsId(coinId),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
    </div>
  );
}
