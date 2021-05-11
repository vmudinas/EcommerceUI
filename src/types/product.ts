export type ProductListItem = {
  productId: number;
  productName: string;
  inventoryQuantity: string;
  shipOnWeekends: number;
  maxBusinessDaysToShip: boolean;
  expectedShipDate: boolean;
};
