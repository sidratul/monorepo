export interface ApiResponse<T=unknown> {
  data: T,
}

export interface BaseResponse {
  message: string;
}

export type ErrorResponse = ApiResponse<BaseResponse>;