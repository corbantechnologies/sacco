import axios, { AxiosInstance } from "axios";

interface SignUpData {
  // compulsory fields
  // Member Number generated automatically from the backend
  email: string;
  password: string;
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
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const apiActions: AxiosInstance = axios?.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export const apiMultipartActions: AxiosInstance = axios?.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// System admins create their accounts
export const signUpSystemAdmin = async (values: SignUpData) => {
  await apiActions?.post("/api/v1/auth/signup/system-admin/", values);
};

// Members create their accounts
export const signUpMember = async (values: SignUpData) => {
  await apiActions?.post("/api/v1/auth/signup/member/", values);
};
