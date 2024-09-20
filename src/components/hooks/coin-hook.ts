import { useQuery } from "@tanstack/react-query";

export const CoinHook = () => {
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

  return {
    coinQuery,
  };
};
