import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type SearchParams = { [key: string]: string | string[] | undefined };

export function cn(...classValues: ClassValue[]) {
  return twMerge(clsx(classValues));
}

export function capitalize(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}
