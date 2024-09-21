import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface DeveloperDataProps {
  coin?: CoinIdData;
}

export const DeveloperData: React.FC<DeveloperDataProps> = ({ coin }) => {
  return (
    <TabsContent value="developer">
      <Card>
        <CardHeader>
          <CardTitle>Developer Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Forks:</p>
              <p className="text-xl font-bold">{coin?.developer_data.forks}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Stars:</p>
              <p className="text-xl font-bold">{coin?.developer_data.stars}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Subscribers:</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.subscribers}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Total Issues:</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.total_issues}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Closed Issues:</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.closed_issues}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Pull Requests Merged:</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.pull_requests_merged}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Pull Request Contributors:</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.pull_request_contributors}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Commit Count (4 weeks):</p>
              <p className="text-xl font-bold">
                {coin?.developer_data.commit_count_4_weeks}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
