import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardProjects = async () => {
  const payload = await fetchFromDashboard("projects");

  return payload;
};
