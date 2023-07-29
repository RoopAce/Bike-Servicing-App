import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import getBarData from "./getBarData";
// New Imports
import getAPI from "../../../api/getApi";
// New Imports

export default function TransactionChart() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const {
    data: t_data,
    isLoading,
    error,
    refetch,
  } = useQuery(["transactions"], () => getAPI.getTransactionData());

  const data = useMemo(() => getBarData(t_data?.data), t_data);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
          <strong className="text-gray-700 font-medium">Transactions</strong>
          <div className="mt-3 w-full flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 10,
                  left: -10,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Total Sales" fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
