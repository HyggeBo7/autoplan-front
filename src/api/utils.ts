export type Result<T> = {
  success: boolean;
  code: number;
  msg?: string;
  data?: T;
};

export type PageBean = {
  current: number;
  size: number;
  total: number;
  records: Array<any>;
};

export type PageResult = {
  success: boolean;
  code: number;
  msg?: string;
  data?: PageBean;
};

export const baseUrlApi = (url: string) => {
  if (!url.startsWith("/")) {
    url = "/" + url;
  }
  return process.env.NODE_ENV === "development" ? `/api${url}` : `${import.meta.env.VITE_API_BASE_PATH}${url}`;
};
