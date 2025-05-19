import { TRANSACTION_CATEGORIES } from "@/constants/transaction_categories";

type Nullable<T> = T | null;

const getString = (value: unknown): string => {
  return (value ?? '').toString();
};

const getDateIfValid = (value: unknown): Nullable<Date> => {
  const date = new Date(value as string);
  return isNaN(date.getTime()) ? null : date;
};

const getArrayIfValid = <T>(value: unknown): Nullable<T[]> => {
  return Array.isArray(value) ? value : null;
};

const getArrayOfIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];

  return value
    .map((id) => getString(id))
    .filter((id) => /^[a-fA-F0-9]{24}$/.test(id)); // Basic ObjectId regex for frontend validation
};

const isNumber = (value: unknown): boolean => {
  const num = Number(value);
  return !isNaN(num) && isFinite(num);
};

const getNumberIfValid = (value: unknown): Nullable<number> => {
  return isNumber(value) ? Number(value) : null;
};

const getNumberIfPositive = (value: unknown): Nullable<number> => {
  const number = getNumberIfValid(value);
  return number !== null && number >= 0 ? number : null;
};

const getBooleanIfValid = (
  value: unknown,
  defaultValue: boolean | null = null,
): boolean | null => {
  if (value === 'true' || value === true) return true;
  if (value === 'false' || value === false) return false;
  return defaultValue;
};

const getBrowser = (browser: unknown): { ip: string; user_agent: string } => {
  const b =
    typeof browser === 'object' && browser !== null
      ? (browser as Record<string, unknown>)
      : {};
  return {
    ip: getString(b.ip),
    user_agent: getString(b.user_agent),
  };
};
const getCategoryIcon = (categoryValue: string) => {
  const category = TRANSACTION_CATEGORIES.find(
    (c) => c.value === categoryValue,
  );
  return category?.icon || null;
};
export default {
  getCategoryIcon,
  getString,
  getDateIfValid,
  getArrayIfValid,
  getArrayOfIds,
  getNumberIfValid,
  getNumberIfPositive,
  getBooleanIfValid,
  getBrowser,
};
