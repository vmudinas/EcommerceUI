export type PaginationResponse<T> = {
  data: T;
  pagination: PaginationValues;
};

export type PaginationValues = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
};
