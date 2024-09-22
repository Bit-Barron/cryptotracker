import { useTranslations } from "next-intl"; // Import the translation hook
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface AdditionalInformationProps {
  coin?: CoinIdData;
}

export const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  coin,
}) => {
  const t = useTranslations();

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>{t("AdditionalInformation.title")}</CardTitle>{" "}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.genesisDate")}:
            </p>{" "}
            <p className="text-xl font-bold">
              {coin?.genesis_date || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.hashingAlgorithm")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.hashing_algorithm || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.blockTime")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.block_time_in_minutes || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.coingeckoScore")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.coingecko_score || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.developerScore")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.developer_score || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.communityScore")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.community_score || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.liquidityScore")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.liquidity_score || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.publicInterestScore")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.public_interest_score || t("AdditionalInformation.na")}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">
              {t("AdditionalInformation.alexaRank")}:
            </p>
            <p className="text-xl font-bold">
              {coin?.public_interest_stats?.alexa_rank ||
                t("AdditionalInformation.na")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
