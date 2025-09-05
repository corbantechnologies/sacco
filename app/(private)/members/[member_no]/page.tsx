/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useFetchMemberByMemberNumber } from "@/hooks/members/actions";
import { useParams } from "next/navigation";
import React from "react";

function MemberDetail() {
  const { member_no } = useParams();

  const {
    isLoading: isLoadingMember,
    data: member,
    refetch: refetchMember,
  } = useFetchMemberByMemberNumber(member_no as string);

  return <div>MemberDetail</div>;
}

export default MemberDetail;
