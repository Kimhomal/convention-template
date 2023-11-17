import { AxiosRequestConfig } from 'axios';

interface Page {
  current_page: number;
  links: { next?: string; previous?: string };
  page_size: number;
  total_count: number;
}

export interface InsurpartsMeta {
  page?: Page;
  code?: number;
  systemCode?: string;
  userMessage?: string;
  systemMessage?: string;
}

export interface InsurpartsResponse<T> {
  data: T;
  meta: InsurpartsMeta;
}

export interface Endpoint extends AxiosRequestConfig {
  url: string;
}
