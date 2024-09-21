export const getPriceData = (coin?: CoinIdData) => [
  {
    name: "1h",
    value: coin?.market_data.price_change_percentage_1h_in_currency?.usd ?? 0,
  },
  {
    name: "24h",
    value: coin?.market_data.price_change_percentage_24h_in_currency?.usd ?? 0,
  },
  {
    name: "7d",
    value: coin?.market_data.price_change_percentage_7d_in_currency?.usd ?? 0,
  },
  {
    name: "14d",
    value: coin?.market_data.price_change_percentage_14d_in_currency?.usd ?? 0,
  },
  {
    name: "30d",
    value: coin?.market_data.price_change_percentage_30d_in_currency?.usd ?? 0,
  },
  {
    name: "1y",
    value: coin?.market_data.price_change_percentage_1y_in_currency?.usd ?? 0,
  },
];
