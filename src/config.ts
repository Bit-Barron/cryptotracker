import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "de"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/coin": "/coin",
  "/contact": "/contact",
};

export const localePrefix: LocalePrefix<Locales> = "always";
