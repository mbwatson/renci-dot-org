import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardTeams = async () => {
  const payload = await fetchFromDashboard("teams");

  return payload;
};
