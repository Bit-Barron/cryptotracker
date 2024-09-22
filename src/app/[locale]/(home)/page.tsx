"use client";

import { CoinHook } from "@/components/hooks/coin-hook";
import { MyPagination } from "@/components/pages/home/pagination";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "@/navigation";
import { searchStore } from "@/store/SearchStore";
import { sortOptions } from "@/utils/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function CryptoTable() {
  const [sortOrder, setSortOrder] = useState("market_cap_desc");
  const { coinQuery } = CoinHook(sortOrder);
  const { searchTerm, setSearchTerm } = searchStore();
  const router = useRouter();
  const t = useTranslations("HomePage");

  const filteredCoins = coinQuery?.data?.filter(
    (coin) =>
      coin.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center mb-6">{t("title")}</h1>
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search coins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={sortOrder} onValueChange={(s) => setSortOrder(s)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Coin</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>24h Change</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Supply</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCoins?.map((coin) => (
            <TableRow
              key={coin.id}
              onClick={() => router.push(`/coin/${coin?.id}`)}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Image
                    src={coin?.image ?? ""}
                    alt={coin?.name ?? ""}
                    width={24}
                    height={24}
                    className="rounded-full"
                    unoptimized
                  />
                  <span>{coin?.name}</span>
                  <span className="text-muted-foreground">
                    ({coin?.symbol?.toUpperCase()})
                  </span>
                </div>
              </TableCell>
              <TableCell>${coin?.current_price?.toFixed(2)}</TableCell>
              <TableCell
                className={
                  coin?.price_change_percentage_24h &&
                  coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </TableCell>
              <TableCell>${coin?.market_cap?.toLocaleString()}</TableCell>
              <TableCell>${coin?.total_volume?.toLocaleString()}</TableCell>
              <TableCell>
                {coin?.circulating_supply?.toLocaleString()}{" "}
                {coin?.symbol?.toUpperCase()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mx-auto">
        <MyPagination
          currentPage={0}
          totalPages={0}
          onPageChange={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      {!coinQuery.data && (
        <div className="flex justify-center items-center">No Coins</div>
      )}
    </div>
  );
}
