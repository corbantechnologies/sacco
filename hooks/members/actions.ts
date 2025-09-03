"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../authentication/useAxiosAuth";
import useUserId from "../authentication/useUserId";
import { getMember } from "@/services/members";

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
