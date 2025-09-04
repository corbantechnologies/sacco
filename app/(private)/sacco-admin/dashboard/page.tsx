"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchAllMembers, useFetchMember } from "@/hooks/members/actions";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingMember,
    data: member,
    refetch: refetchMember,
  } = useFetchMember();

  const {
    isLoading: isLoadingMembers,
    data: members,
    refetch: refetchMembers,
  } = useFetchAllMembers();

  if (isLoadingMember || isLoadingMembers) {
    return <div>Loading...</div>;
  }

  return <div>Dashboard</div>;
}

export default Dashboard;
