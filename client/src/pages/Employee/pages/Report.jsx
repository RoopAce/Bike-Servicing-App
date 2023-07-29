import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
// New Imports
import getAPI from "../../../api/getApi";
// New Imports

import getFormattedReportData from "./getFormattedReportData";

const columns = [
  {
    field: "username",
    headerName: "Created By",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone No.",
    width: 150,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "itemsFormatted",
    headerName: "Items",
    width: 200,
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 110,
  },
];

export default function Report() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getAPI
      .getTransactionData()
      .then((resp) => resp.data)
      .then(getFormattedReportData)
      .then((data) => setRows(data))
      .catch((err) => {
        toast.error("Error fetching data");
        setRows([]);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <div className="flex items-center justify-between px-4 py-2 bg-blue-600">
        <h1 className="text-lg font-semibold text-white">Total Employee</h1>
        <button
          className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-800"
          onClick={() => refetch()}
        >
          Refresh
        </button>
      </div>
      <br />
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
