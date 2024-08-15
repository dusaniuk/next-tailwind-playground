import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classValues: ClassValue[]) {
  return twMerge(clsx(classValues));
}

export function capitalize(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}
