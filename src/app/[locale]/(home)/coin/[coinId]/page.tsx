"use client";

import { CoinHook } from "@/components/hooks/coin-hook";
import { AdditionalInformation } from "@/components/pages/home/additional-information";
import { DeveloperData } from "@/components/pages/home/developer-data";
import { MarketData } from "@/components/pages/home/market-data";
import { PriceChanges } from "@/components/pages/home/price-changes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

export default function CoinInfoPage() {
  const { coinIdQuery } = CoinHook();
  const coin = coinIdQuery.data;
  const t = useTranslations();

  return (
    <div className="container mx-auto p-4">
      {!coin && (
        <div className="text-center py-4">
          <h2 className="text-xl font-semibold">{t("NoCoins.title")}</h2>
          <p className="text-muted-foreground mt-2">
            {t("NoCoins.description")}
          </p>
        </div>
      )}

      {coinIdQuery.isLoading && <div>{t("loading")}</div>}
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

        <MarketData coin={coin} />

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

        <DeveloperData coin={coin} />
      </Tabs>
      <AdditionalInformation />
      <PriceChanges coin={coin} />
    </div>
  );
}
