"use client";

import { useFetchAllMembers } from "@/hooks/members/actions";
import React from "react";

function SaccoMembers() {
  const {
    isLoading: isLoadingMembers,
    data: members,
    refetch: refetchMembers,
  } = useFetchAllMembers();

  if (isLoadingMembers) {
    return <div>Loading...</div>;
  }
  
  return <div>SaccoMembers</div>;
}

export default SaccoMembers;
