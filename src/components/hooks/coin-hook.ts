import { fetchCoins, fetchCoinsId } from "@/lib/fetch-coins";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const CoinHook = (
  sortOrder: string = "market_cap_desc",
  page: number = 1
) => {
  const params = useParams();

  const coinQuery = useQuery<CoinData[]>({
    queryKey: ["coin", sortOrder, page],
    queryFn: () => fetchCoins(sortOrder, page),
    enabled: !!sortOrder && !!page,
    staleTime: 60000,
  });

  const coinIdQuery = useQuery<CoinIdData>({
    queryKey: ["coin", params.coinId],
    queryFn: () => fetchCoinsId(),
    enabled: !!params.coinId,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  return {
    coinIdQuery,
    coinQuery,
  };
};
