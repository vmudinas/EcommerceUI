import React, { FC, useContext, useEffect, useState } from "react";
import ProductService from "../services/productService";
import { ProductListItem } from "../types/product";
import {
  Divider,
  Grid,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AdminContext } from "../contexts/AdminContext";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

type HeadCell = {
  id: string;
  alignment: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  label: string;
  disablePadding?: boolean;
};
const headCells: Array<HeadCell> = [
  { id: "productId", alignment: "left", label: "Product ID" },
  { id: "productName", alignment: "left", label: "Product Name" },
  { id: "inventoryQuantity", alignment: "left", label: "Inventory Quantitty" },
  { id: "expectedShipDate", alignment: "left", label: "Expectect Ship Date" },
];

const Products: FC = () => {
  const [totalItems, setTotalItems] = useState(1);
  const [products, setProducts] = useState<ProductListItem[]>();

  const { productPagination, changeProductPageSize, changeProductPageNumber } =
    useContext(AdminContext);
  const { pageNumber, pageSize } = productPagination;

  const [selectedDate, setSelectedDate] = React.useState("");
  const classes = useStyles();
  const [pageChange, setPageChange] = useState(false);
  const [pageSizeChange, setPageSizeChange] = useState(false);
  const [dateChange, setDateChange] = useState(false);

  function fetchData() {
    (async () => {
      const productService = new ProductService();
      const response = await productService.GetProducts(
        pageNumber,
        pageSize,
        selectedDate
      );

      setProducts(response.data);
      setTotalItems(response.pagination.totalItems);
    })();
  }
  useEffect(() => {
    fetchData();
  }, [pageNumber, productPagination.pageSize, setProducts, setTotalItems]);

  useEffect(() => {
    fetchData();
    setPageChange(false);
  }, [pageChange]);

  useEffect(() => {
    fetchData();
    setPageSizeChange(false);
  }, [pageSizeChange]);

  useEffect(() => {
    fetchData();
    setDateChange(false);
  }, [dateChange]);

  const handleChangePageNumber = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    productPagination.pageNumber = newPage + 1;
    changeProductPageNumber(newPage + 1);
    setPageChange(true);
  };

  const handleChangePageSize = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    productPagination.pageSize = parseInt(event.target.value);
    changeProductPageSize(parseInt(event.target.value));
    changeProductPageNumber(pageNumber);
    setPageSizeChange(true);
  };

  const handleDateChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
     setSelectedDate(event.target.value.toString());
    setDateChange(true);
  };

  return (
    <>
      <Divider />
      <br />
      <Grid container spacing={1}>
        <Grid container item xs={3} spacing={3}></Grid>
        <Grid item xs={6}>
          <Divider />

          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div>
                <Paper>
                  <Toolbar>
                    <Typography variant="h6" id="tableTitle">
                      <TextField
                        id="date"
                        label="Order Date"
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        onChange={handleDateChange}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Typography>
                  </Toolbar>
                  <TableContainer>
                    <Table size={"medium"}>
                      <TableHead>
                        <TableRow>
                          {headCells.map((headCell: HeadCell) => (
                            <TableCell
                              key={headCell.id}
                              align={headCell.alignment}
                            >
                              {headCell.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableHead>
                        {products &&
                          products.length &&
                          products.map((item: ProductListItem) => (
                            <TableRow>
                              <TableCell key={item.productId}>
                                {item.productId}
                              </TableCell>
                              <TableCell key={item.productId + "Name"}>
                                {item.productName}
                              </TableCell>
                              <TableCell
                                key={item.productId + "InventoryQuantity"}
                              >
                                {item.inventoryQuantity}
                              </TableCell>
                              <TableCell
                                key={item.productId + "ExpectedShipDate"}
                              >
                                {item.expectedShipDate}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableHead>
                    </Table>
                  </TableContainer>
                  {products && products.length && (
                    <TablePagination
                      count={totalItems || 1}
                      onChangePage={handleChangePageNumber}
                      page={pageNumber ? pageNumber - 1 : 0}
                      rowsPerPage={pageSize}
                      rowsPerPageOptions={[1, 5, 10, 25]}
                      component="div"
                      onChangeRowsPerPage={handleChangePageSize}
                    />
                  )}
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
