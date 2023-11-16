export const fetchDashboardPeople = async () => {
  const payload = await fetchFromDashboard("people");

  return payload;
};
