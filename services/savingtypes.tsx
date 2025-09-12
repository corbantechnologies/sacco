import { apiActions } from "@/tools/axios";

interface SavingTypeFormFields {
  name: string;
  description: string;
}

export const createSavingType = async (
  values: SavingTypeFormFields,
  headers: { headers: { Authorization: string } }
) => {
  await apiActions.post("/api/v1/savingstypes/", values, headers);
};

export const fetchSavingTypes = async (headers: {
  headers: { Authorization: string };
}) => {
  const response = await apiActions.get("/api/v1/savingstypes/", headers);
  return response.data.results;
};

export const fetchSavingTypeDetail = async (
  reference: string,
  headers: { headers: { Authorization: string } }
) => {
  const response = await apiActions.get(
    `/api/v1/savingstypes/${reference}/`,
    headers
  );
  return response.data;
};

export const updateSavingType = async (
  reference: string,
  values: SavingTypeFormFields,
  headers: { headers: { Authorization: string } }
) => {
  await apiActions.patch(`/api/v1/savingstypes/${reference}/`, values, headers);
};
