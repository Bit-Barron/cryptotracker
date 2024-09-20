import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const CoinHook = () => {
  const params = useParams();
  const coinQuery = useQuery<CoinData[]>({
    queryKey: ["coin"],
    queryFn: async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
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
  });

  return {
    coinIdQuery,
    coinQuery,
  };
};
