"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchMember } from "@/hooks/members/actions";
import React from "react";

function Dashboard() {
  // const userId = useUserId();
  const {
    isLoading: isLoadingMember,
    data: member,
    refetch: refetchMember,
  } = useFetchMember();

  if (isLoadingMember) {
    return <div>Loading...</div>;
  }

  console.log(member);

  return <div>Dashboard</div>;
}

export default Dashboard;
