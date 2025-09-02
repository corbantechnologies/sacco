"use client";

import { apiActions, apiMultipartActions } from "@/tools/api";
import { AxiosResponse } from "axios";

// Define the shape of the user data
interface User {
  id: string;
  member_no: string;
  email: string;
  salutation: string;
  first_name: string;
  last_name: string;
  dob: string;
  gender: string;
  id_type: string;
  id_no: string;
  tax_pin: string;
  phone: string;
  employment_type: string;
  is_system_admin: boolean;
  is_member: boolean;
  is_staff: boolean;
}

// Define the shape of form data for updating a member
interface UpdateMemberData {
  [key: string]: string | File | undefined;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  county?: string;
  employer?: string;
  job_title?: string;
}

export const getMember = async (
  userId: string,
  headers: { headers: { Authorization: string } }
): Promise<User> => {
  const response: AxiosResponse<User> = await apiActions.get(
    `/api/v1/auth/${userId}/`,
    headers
  );
  return response.data;
};

export const updateMember = async (
  userId: string,
  formData: UpdateMemberData | FormData,
  headers: { headers: { Authorization: string } }
): Promise<User> => {
  const response: AxiosResponse<User> = await apiMultipartActions.patch(
    `/api/v1/auth/${userId}/`,
    formData,
    headers
  );
  return response.data;
};
