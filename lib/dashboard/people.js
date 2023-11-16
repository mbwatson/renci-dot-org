import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardPeople = async () => {
  const payload = await fetchFromDashboard("people");

  return payload;
};
