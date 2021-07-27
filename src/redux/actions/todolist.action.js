import { TODOLIST_ACTION } from "../constants";

export const createProductAction = (params) => {
  return {
    type: "CREATE_TASK",
    payload: params,
  };
};

export const deleteProductAction = (params) => {
  return {
    type: "DELETE_TASK",
    payload: params,
  };
};

export const editProductAction = (params) => {
  return {
    type: "EDIT_TASK",
    payload: params,
  };
};
