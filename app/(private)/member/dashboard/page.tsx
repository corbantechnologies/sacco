"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchMember } from "@/hooks/members/actions";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingMember,
    data: member,
    refetch: refetchMember,
  } = useFetchMember();

  if (isLoadingMember) {
    return <div>Loading...</div>;
  }


  return <div>Dashboard</div>;
}

export default Dashboard;
