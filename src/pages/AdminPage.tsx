import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin"; // Utility for fetching
import { UserList, UserEdit, UserCreate } from "./Users"; // Import UserEdit, UserList, and UserCreate


// Custom data provider to handle pagination and headers
const customDataProvider = simpleRestProvider(
  "http://localhost:3000",
  fetchUtils.fetchJson
);

const myDataProvider = {
  ...customDataProvider,
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };
    const url = `${resource}?${fetchUtils.queryParameters(query)}`;
    const { headers, json } = await customDataProvider.getList(resource, {
      pagination: { page, perPage },
      sort: { field, order },
      filter: params.filter,
    });

    if (!headers.has("X-Total-Count")) {
      throw new Error(
        "The X-Total-Count header is missing in the HTTP Response. The backend must include this header for pagination to work properly."
      );
    }

    return {
      data: json,
      total: parseInt(headers.get("X-Total-Count"), 10),
    };
  },
};

const AdminPage: React.FC = () => (
  <Admin dataProvider={myDataProvider}>
     <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);

export default AdminPage;
