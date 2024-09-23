export const fetchCoins = async (sortOrder = "market_cap_desc", page = 1) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortOrder}&page=${page}`
  );

  return res.json();
};

export const fetchCoinsId = async (coinId?: string): Promise<CoinIdData> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}`
  );

  return response.json();
};
