import * as casesEn from "./cases-en";
import * as casesRu from "./cases";
import { siteCopy } from "./site";

export function getLocalizedCases(locale) {
  return locale === "ru" ? casesRu : casesEn;
}

export function getSiteCopy(locale) {
  return siteCopy[locale] ?? siteCopy.en;
}
