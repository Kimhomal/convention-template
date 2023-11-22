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

// FIXME: 응답이 없을 때 빈 문자열 대신 null을 반환하도록 백엔드에 요청
export interface InsurpartsMeta {
  page: PageRes | '';
  code: number;
  systemCode: string | '';
  userMessage: string | '';
  systemMessage: string | '';
}

export interface InsurpartsResponse<T> {
  data: T;
  meta: InsurpartsMeta;
}

export interface Endpoint extends AxiosRequestConfig {
  url: string;
}
