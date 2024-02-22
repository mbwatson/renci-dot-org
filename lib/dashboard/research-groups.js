import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchResearchGroups = async () => {
  const payload = await fetchFromDashboard("research-groups");

  return payload;
};
