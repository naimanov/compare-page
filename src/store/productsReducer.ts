import { smartphones } from '../data/mockData';
import { descriptionTranslate } from '../data/mockData';
import { Actions } from './actions';

interface ProductsState {
  products: any[];
  showing_products: any[];
  products_amount: number;
  table_products: any[];
  table_filter: boolean;
  modal_open: boolean;
  modal_products: any[];
  modal_showing_products: any[];
  modal_id: string;
  modal_search_text: string;
}

interface ProductsAction {
  type: string;
  payload?: any;
}
const initialState: ProductsState = {
  products: smartphones,
  showing_products: smartphones.slice(0, 3),
  products_amount: 3,
  table_products: [],
  table_filter: false,
  modal_open: false,
  modal_products: [],
  modal_showing_products: [],
  modal_id: '',
  modal_search_text: '',
};

export const productsReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case Actions.GET_TABLE_DATA:
      const tableRowTitles = Object.keys(state.products[0].description);
      const tableData = tableRowTitles.map((rowTitle) => {
        const rowProducts = state.showing_products.map((item) => {
          return item.description[rowTitle];
        });
        const allSame = new Set(rowProducts).size > 1 ? false : true;
        const title1 = rowTitle;
        const rowData = {
          title: descriptionTranslate[title1],
          items: rowProducts,
          allSame: allSame,
        };
        return rowData;
      });
      let tableInfo;
      if (state.table_filter) {
        tableInfo = tableData.filter((item) => {
          return item.allSame === false;
        });
      } else {
        tableInfo = tableData;
      }
      return { ...state, table_products: tableInfo };
    case Actions.SET_TABLE_FILTER:
      return {
        ...state,
        table_filter: action.payload,
      };

    case Actions.CHANGE_AMOUNT:
      return {
        ...state,
        products_amount: action.payload,
        showing_products: state.products.slice(0, action.payload),
      };
    case Actions.OPEN_MODAL:
      return {
        ...state,
        modal_open: true,
        modal_id: action.payload,
      };

    case Actions.CLOSE_MODAL:
      return {
        ...state,
        modal_open: false,
      };
    case Actions.GET_MODAL_PRODUCTS:
      return {
        ...state,
        modal_products: state.products.slice(state.products_amount),
        modal_showing_products: state.products.slice(state.products_amount),
      };

    case Actions.REPLACE_ITEM:
      const replaceIndex = state.products.findIndex(
        (item) => item.id === state.modal_id
      );
      const newIndex = state.products.findIndex(
        (item) => item.id === action.payload
      );
      const replacedItem = state.products[replaceIndex];
      const newItem = state.products[newIndex];

      const newArr = state.products;
      newArr[replaceIndex] = newItem;
      newArr[newIndex] = replacedItem;

      return {
        ...state,
        modal_open: false,
        showing_products: [...newArr].slice(0, state.products_amount),
      };
    case Actions.SEARCH:
      const filteredArr = state.modal_products.filter((item) => {
        return item.title
          .toLowerCase()
          .startsWith(action.payload.toLowerCase());
      });
      return {
        ...state,
        modal_showing_products: filteredArr,
      };
    default:
      return state;
  }
};
