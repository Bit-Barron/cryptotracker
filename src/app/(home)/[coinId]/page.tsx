"use client";

import { CoinHook } from "@/components/hooks/coin-hook";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CoinInfoPage() {
  const { coinIdQuery } = CoinHook();
  const coin = coinIdQuery.data;

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
    <div className="container mx-auto p-4">
      {!coin && <div>No Coin</div>}
      {coinIdQuery.isLoading && <div>Loading...</div>}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <Avatar className="h-16 w-16 mr-4">
            <AvatarImage src={coin?.image.large} alt={coin?.name} />
            <AvatarFallback>{coin?.symbol.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{coin?.name}</CardTitle>
            <CardDescription>{coin?.symbol.toUpperCase()}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Current Price:</p>
              <p className="text-2xl font-bold">
                ${coin?.market_data.current_price.usd.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Market Cap Rank:</p>
              <p className="text-2xl font-bold">#{coin?.market_cap_rank}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="market-data">Market Data</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="developer">Developer</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <p className="mb-4">{coin?.description.en}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Categories:</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {coin?.categories.map((category, index) => (
                        <Badge key={index} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Links:</h3>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <a
                          href={coin?.links.homepage[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Website
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://twitter.com/${coin?.links.twitter_screen_name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          href={coin?.links.subreddit_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Reddit
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market-data">
          <Card>
            <CardHeader>
              <CardTitle>Market Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium">Market Cap:</p>
                  <p className="text-xl font-bold">
                    ${coin?.market_data.market_cap.usd.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">24h Trading Volume:</p>
                  <p className="text-xl font-bold">
                    ${coin?.market_data.total_volume.usd.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Circulating Supply:</p>
                  <p className="text-xl font-bold">
                    {coin?.market_data.circulating_supply.toLocaleString()}{" "}
                    {coin?.symbol.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Max Supply:</p>
                  <p className="text-xl font-bold">
                    {coin?.market_data.max_supply
                      ? coin?.market_data.max_supply.toLocaleString()
                      : "N/A"}{" "}
                    {coin?.symbol.toUpperCase()}
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

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Twitter Followers:</p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.twitter_followers.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Reddit Subscribers:</p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.reddit_subscribers.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Reddit Average Posts (48h):
                  </p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.reddit_average_posts_48h}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Reddit Average Comments (48h):
                  </p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.reddit_average_comments_48h}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="developer">
          <Card>
            <CardHeader>
              <CardTitle>Developer Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Forks:</p>
                  <p className="text-xl font-bold">
                    {coin?.developer_data.forks}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Stars:</p>
                  <p className="text-xl font-bold">
                    {coin?.developer_data.stars}
                  </p>
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
                  <p className="text-sm font-medium">
                    Pull Request Contributors:
                  </p>
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
      </Tabs>
    </div>
  );
}
