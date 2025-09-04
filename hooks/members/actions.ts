"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../authentication/useAxiosAuth";
import useUserId from "../authentication/useUserId";
import { getAllMembers, getMember, getMemberByMemberNumber } from "@/services/members";

export function useFetchMember() {
  // Fetching the user details
  const userId = useUserId();
  const token = useAxiosAuth();

  return useQuery({
    queryKey: ["member", userId],
    queryFn: () => getMember(userId!, token),
    enabled: !!userId,
  });
}


// SACCO Admins Hooks

export function useFetchAllMembers() {
  const token = useAxiosAuth();

  return useQuery({
    queryKey: ["members"],
    queryFn: () => getAllMembers(token),
  });
}

export function useFetchMemberByMemberNumber(member_no: string) {
  const token = useAxiosAuth();

  return useQuery({
    queryKey: ["member", member_no],
    queryFn: () => getMemberByMemberNumber(member_no, token),
    enabled: !!member_no,
  });
}