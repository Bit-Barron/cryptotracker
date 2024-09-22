"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import React, { ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className={`${isPending ? "opacity-50" : ""}`}>
      <Label htmlFor="locale-select" className="sr-only">
        {label}
      </Label>
      <Select
        defaultValue={defaultValue}
        onValueChange={onSelectChange}
        disabled={isPending}
      >
        <SelectTrigger
          id="locale-select"
          className="w-[180px] bg-transparent text-gray-400"
        >
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === "option") {
              return (
                <SelectItem value={child.props.value}>
                  {child.props.children}
                </SelectItem>
              );
            }
            return null;
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
