import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface AdditionalInformationProps {
  coin?: CoinIdData;
}

export const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  coin,
}) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Additional Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium">Genesis Date:</p>
            <p className="text-xl font-bold">{coin?.genesis_date || "N/A"}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Hashing Algorithm:</p>
            <p className="text-xl font-bold">
              {coin?.hashing_algorithm || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Block Time (minutes):</p>
            <p className="text-xl font-bold">
              {coin?.block_time_in_minutes || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Coingecko Score:</p>
            <p className="text-xl font-bold">
              {coin?.coingecko_score || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Developer Score:</p>
            <p className="text-xl font-bold">
              {coin?.developer_score || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Community Score:</p>
            <p className="text-xl font-bold">
              {coin?.community_score || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Liquidity Score:</p>
            <p className="text-xl font-bold">
              {coin?.liquidity_score || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Public Interest Score:</p>
            <p className="text-xl font-bold">
              {coin?.public_interest_score || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Alexa Rank:</p>
            <p className="text-xl font-bold">
              {coin?.public_interest_stats?.alexa_rank || "N/A"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
