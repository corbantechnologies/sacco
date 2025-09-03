import { apiActions } from "@/tools/axios";

export interface SignUpData {
    email: string;
    password: string;
    salutation: string;
    first_name: string;
    last_name: string;
    dob: string;
    gender: string;
    id_type: string;
    id_number: string;
    tax_pin: string;
    phone: string;
    employment_type: string;
  }
// System admins create their accounts
export const signUpSystemAdmin = async (values: SignUpData) => {
    const response = await apiActions?.post("/api/v1/auth/signup/system-admin/", values);
    return response
  };
  
  // Members create their accounts
  export const signUpMember = async (values: SignUpData) => {
    const response = await apiActions?.post("/api/v1/auth/signup/member/", values);
    return response
  };