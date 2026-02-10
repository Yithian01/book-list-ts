// 모든 API 응답의 기본 틀
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}