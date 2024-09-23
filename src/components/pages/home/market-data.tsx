import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { getPriceData } from "@/utils/constants";
import { useTranslations } from "next-intl"; // Import the translation hook
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface MarketDataProps {
  coin?: CoinIdData;
}

export const MarketData: React.FC<MarketDataProps> = ({ coin }) => {
  const t = useTranslations();
  const priceData = getPriceData(coin);

  return (
    <TabsContent value="market-data">
      <Card>
        <CardHeader>
          <CardTitle>{t("MarketData.title")}</CardTitle>{" "}
          {/* Translated title */}
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm font-medium">
                {t("MarketData.marketCap")}:
              </p>{" "}
              {/* Translated label */}
              <p className="text-xl font-bold">
                ${coin?.market_data.market_cap.usd.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("MarketData.tradingVolume")}:
              </p>{" "}
              {/* Translated label */}
              <p className="text-xl font-bold">
                ${coin?.market_data.total_volume.usd.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("MarketData.circulatingSupply")}:
              </p>{" "}
              {/* Translated label */}
              <p className="text-xl font-bold">
                {coin?.market_data.circulating_supply.toLocaleString()}{" "}
                {coin?.symbol?.toUpperCase()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("MarketData.maxSupply")}:
              </p>{" "}
              {/* Translated label */}
              <p className="text-xl font-bold">
                {coin?.market_data.max_supply
                  ? coin?.market_data.max_supply.toLocaleString()
                  : "N/A"}{" "}
                {coin?.symbol?.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
