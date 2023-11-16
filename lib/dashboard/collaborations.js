export const fetchDashboardCollaborations = async () => {
  const payload = await fetchFromDashboard("collaborations");

  return payload;
};
