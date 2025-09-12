"use client";

import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../authentication/useAxiosAuth";
import { fetchSavingTypeDetail, fetchSavingTypes } from "@/services/savingtypes";

export function useFetchSavingTypes() {
    const token = useAxiosAuth();

    return useQuery({
        queryKey: ["savingstypes"],
        queryFn: () => fetchSavingTypes(token),
    })
}

export function useFetchSavingType(reference: string) {
    const token = useAxiosAuth();

    return useQuery({
        queryKey: ["savingstype", reference],
        queryFn: () => fetchSavingTypeDetail(reference, token),
        enabled: !!reference,
    })
}