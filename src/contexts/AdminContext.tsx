import { createContext, FC, useReducer } from "react";
import { ActionTypes } from "./actions";

export type AdminState = {
  productPagination: {
    pageNumber: number;
    pageSize: number;
  };

  changeProductPageNumber: (pageNumber: number) => void;
  changeProductPageSize: (pageSize: number) => void;
};

const initialState: AdminState = {
  productPagination: {
    pageNumber: 1,
    pageSize: 10,
  },

  changeProductPageNumber: () => {},
  changeProductPageSize: () => {},
};

function reducer(state: AdminState, action: ActionTypes): AdminState {
  const newState = { ...state };
  switch (action.type) {
    case "CHANGE_PRODUCT_PAGE_NUMBER":
      newState.productPagination.pageNumber = action.pageNumber;
      return newState;
    case "CHANGE_PRODUCT_PAGE_SIZE":
      newState.productPagination.pageSize = action.pageSize;
      return newState;
    default:
      return newState;
  }
}

export const AdminContext = createContext<AdminState>(initialState);

export const AdminStateProvider: FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeProductPageNumber = (pageNumber: number) =>
    dispatch({ type: "CHANGE_PRODUCT_PAGE_NUMBER", pageNumber });
  const changeProductPageSize = (pageSize: number) =>
    dispatch({ type: "CHANGE_PRODUCT_PAGE_SIZE", pageSize });
  const value = {
    ...state,
    changeProductPageNumber,
    changeProductPageSize,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
