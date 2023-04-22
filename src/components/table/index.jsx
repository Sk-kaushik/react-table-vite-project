import React from "react";
import DataTable from "react-data-table-component";
import { useQueryParams } from "../../hooks";

export const initialParams = {
  sort: "asc",
  limit: 10,
  page: 1,
};

const DEFAULT_CONFIG = {
  columns: [],
  data: [],
  loading: true,
  pagination: false,
  changeParams: null,
  updateUrl: false,
};

export default function Table(props) {
  const {
    loading = DEFAULT_CONFIG.loading,
    data = DEFAULT_CONFIG.data,
    columns = DEFAULT_CONFIG.columns,
    pagination = DEFAULT_CONFIG?.pagination,
    changeParams = DEFAULT_CONFIG?.changeParams,
    updateUrl = DEFAULT_CONFIG?.updateUrl,
  } = props;

  const [search, changeSearch] = useQueryParams(pagination ? initialParams : "");

  const onChangePage = (currentPage) => {
    let limit = search.get("_limit");

    if (updateUrl) changeSearch({ ...initialParams, limit, page: currentPage, updateUrl: true });

    if (changeParams) changeParams({ ...initialParams, limit, page: currentPage });
  };

  const onChangeRowsPerPage = (currentRowsPerPage) => {
    let page = search.get("_page");

    if (updateUrl) changeSearch({ ...initialParams, limit: currentRowsPerPage, page, updateUrl: true });

    if (changeParams) changeParams({ ...initialParams, limit: currentRowsPerPage, page });
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      progressPending={loading}
      pagination={pagination}
      paginationPerPage={search.get("_limit")}
      paginationTotalRows={20}
      paginationServer
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  );
}
