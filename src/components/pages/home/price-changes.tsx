import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPriceData } from "@/utils/constants";
import { useTranslations } from "next-intl";
import React from "react";

interface PriceChangesProps {
  coin?: CoinIdData;
}

export const PriceChanges: React.FC<PriceChangesProps> = ({ coin }) => {
  const t = useTranslations();
  const priceData = getPriceData(coin);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>{t("PriceChanges.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {priceData.map((item) => (
            <div key={item.name}>
              <p className="text-sm font-medium">
                {t(`PriceChanges.${item.name.toLowerCase()}`)}
                {t("PriceChanges.change")}:
              </p>
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
