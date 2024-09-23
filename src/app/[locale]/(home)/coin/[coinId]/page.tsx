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
import { useTranslations } from "next-intl"; // Import the translation hook

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

      {coin && (
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src={coin?.image?.large} alt={coin?.name} />
              <AvatarFallback>{coin?.symbol?.toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{coin?.name}</CardTitle>
              <CardDescription>{coin?.symbol?.toUpperCase()}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">
                  {t("CoinData.currentPrice")}:
                </p>
                <p className="text-2xl font-bold">
                  ${coin?.market_data.current_price.usd.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">
                  {t("CoinData.marketCapRank")}:
                </p>
                <p className="text-2xl font-bold">#{coin?.market_cap_rank}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">{t("Tabs.overview")}</TabsTrigger>
          <TabsTrigger value="market-data">{t("Tabs.marketData")}</TabsTrigger>
          <TabsTrigger value="social">{t("Tabs.social")}</TabsTrigger>
          <TabsTrigger value="developer">{t("Tabs.developer")}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>{t("Tabs.overview")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <p className="mb-4">{coin?.description.en}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">
                      {t("CoinData.categories")}:
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {coin?.categories.map((category, index) => (
                        <Badge key={index} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t("CoinData.links")}:</h3>
                    <ul className="list-disc list-inside mt-2">
                      <li>
                        <a
                          href={coin?.links.homepage[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {t("CoinData.website")}
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
              <CardTitle>{t("Tabs.socialData")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">
                    {t("SocialData.twitterFollowers")}:
                  </p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.twitter_followers.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {t("SocialData.redditSubscribers")}:
                  </p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.reddit_subscribers.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {t("SocialData.redditAvgPosts")}:
                  </p>
                  <p className="text-xl font-bold">
                    {coin?.community_data.reddit_average_posts_48h}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {t("SocialData.redditAvgComments")}:
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
