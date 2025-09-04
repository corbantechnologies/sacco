"use client";

import { useFetchAllMembers } from "@/hooks/members/actions";
import React from "react";

function SaccoMembers() {
  const {
    isLoading: isLoadingMembers,
    data: members,
    refetch: refetchMembers,
  } = useFetchAllMembers();
  return <div>SaccoMembers</div>;
}

export default SaccoMembers;
