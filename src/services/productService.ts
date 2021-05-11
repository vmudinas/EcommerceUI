import axios from "axios";
import { PaginationResponse, PaginationValues } from "../types/pagination";
import { ProductListItem } from "../types/product";

class ProductService {
  constructor() {
     axios.defaults.baseURL = "http://localhost:3005/api"; // This should be moved to env.
  }

  async GetProducts(
    pageNumber: number,
    pageSize: number,
    f: string,
  ): Promise<PaginationResponse<ProductListItem[]>> {
    const response = await axios({
      url: "/inventory",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      params: {
        f,
        pageNumber,
        pageSize,
      },
    });
    const paginationValues: PaginationValues = JSON.parse(
      response.headers.pagination
    );

    return {
      data: response.data,
      pagination: paginationValues,
    };
  }
}

export default ProductService;
