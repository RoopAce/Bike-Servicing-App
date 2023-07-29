import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import DashboardStatsGrid from "../components/DashboardStatsGrid";
import TransactionChart from "../components/TransactionChart";
import BuyerProfilePieChart from "../components/BuyerProfilePieChart";

// New Imports
import getAPI from "../../../api/getApi";
// New Imports

export default function Dashboard() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const { data, isLoading, error, refetch } = useQuery(["dashdata"], () =>
    getAPI.getDashdata()
  );

  useEffect(() => {
    if (["/admin", "/employee"].includes(location.pathname)) {
      queryClient.invalidateQueries("dashdata");
      refetch();
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <DashboardStatsGrid systemStats={data?.data?.systemStats} />
          <div className="flex flex-row gap-4 w-full">
            <TransactionChart />
          </div>
          <div className="flex flex-row gap-4 w-full">
            <BuyerProfilePieChart userDemographics={data?.data?.userDemographics} />
          </div>
        </>
      )}
    </div>
  );
}
