import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@radix-ui/react-tabs";
import { useTranslations } from "next-intl"; // Import the translation hook
import React from "react";

interface DeveloperDataProps {
  coin?: CoinIdData;
}

export const DeveloperData: React.FC<DeveloperDataProps> = ({ coin }) => {
  const t = useTranslations();

  return (
    <TabsContent value="developer">
      <Card>
        <CardHeader>
          <CardTitle>{t("DeveloperData.title")}</CardTitle>{" "}
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">{t("DeveloperData.forks")}:</p>{" "}
              <p className="text-xl font-bold">
                {coin?.developer_data.forks || t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">{t("DeveloperData.stars")}:</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.stars || t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("DeveloperData.subscribers")}:
              </p>
              <p className="text-xl font-bold">
                {coin?.developer_data.subscribers || t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("DeveloperData.totalIssues")}:
              </p>
              <p className="text-xl font-bold">
                {coin?.developer_data.total_issues || t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("DeveloperData.closedIssues")}:
              </p>
              <p className="text-xl font-bold">
                {coin?.developer_data.closed_issues || t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("DeveloperData.pullRequestsMerged")}:
              </p>
              <p className="text-xl font-bold">
                {coin?.developer_data.pull_requests_merged ||
                  t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("DeveloperData.pullRequestContributors")}:
              </p>
              <p className="text-xl font-bold">
                {coin?.developer_data.pull_request_contributors ||
                  t("DeveloperData.na")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                {t("DeveloperData.commitCount")}:
              </p>
              <p className="text-xl font-bold">
                {coin?.developer_data.commit_count_4_weeks ||
                  t("DeveloperData.na")}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
