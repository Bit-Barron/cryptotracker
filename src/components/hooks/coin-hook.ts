import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const CoinHook = (
  sortOrder: string = "market_cap_desc",
  page: number = 1
) => {
  const params = useParams();

  const coinQuery = useQuery<CoinData[]>({
    queryKey: ["coin", sortOrder, page],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=${sortOrder}&per_page=50&page=${page}&sparkline=false`
      );
      console.log(page);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  const coinIdQuery = useQuery<CoinIdData>({
    queryKey: ["coin", params.coinId],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${params.coinId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: !!params.coinId,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  return {
    coinIdQuery,
    coinQuery,
  };
};
