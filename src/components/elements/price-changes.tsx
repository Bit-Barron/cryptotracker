import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface PriceChangesProps {
  coin?: CoinIdData;
}

export const PriceChanges: React.FC<PriceChangesProps> = ({ coin }) => {
  const priceData = [
    {
      name: "1h",
      value: coin?.market_data.price_change_percentage_1h_in_currency?.usd || 0,
    },
    {
      name: "24h",
      value:
        coin?.market_data.price_change_percentage_24h_in_currency?.usd || 0,
    },
    {
      name: "7d",
      value: coin?.market_data.price_change_percentage_7d_in_currency?.usd || 0,
    },
    {
      name: "14d",
      value:
        coin?.market_data.price_change_percentage_14d_in_currency?.usd || 0,
    },
    {
      name: "30d",
      value:
        coin?.market_data.price_change_percentage_30d_in_currency?.usd || 0,
    },
    {
      name: "1y",
      value: coin?.market_data.price_change_percentage_1y_in_currency?.usd || 0,
    },
  ];
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Price Change Percentages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {priceData.map((item) => (
            <div key={item.name}>
              <p className="text-sm font-medium">{item.name} Change:</p>
              <p
                className={`text-xl font-bold ${
                  item.value >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.value.toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
