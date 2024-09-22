import { locales } from "@/config";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./local-switcher-select";

export default function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("LocaleSwitcher.label")}
    >
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("LocaleSwitcher.locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
