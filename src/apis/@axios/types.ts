import { AxiosRequestConfig } from 'axios';

export interface PageReq {
  page?: number;
  page_size?: number;
}

interface PageRes {
  current_page: number;
  links: { next: string | null; previous: string | null };
  page_size: number;
  total_count: number;
}

export interface InsurpartsMeta {
  page: PageRes;
  code: number;
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
