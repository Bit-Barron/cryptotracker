export const fetchCoins = async (
  sortOrder: string = "market_cap_desc",
  page: number = 1
) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=${sortOrder}&per_page=50&page=${page}&sparkline=false`
  );

  return response.json();
};

export const fetchCoinData = async (coinId?: string): Promise<CoinIdData> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );

  return response.json();
};
