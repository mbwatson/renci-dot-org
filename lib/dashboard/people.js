import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardPeople = async () => {
  const payload = await fetchFromDashboard("people");

  let ood = [{
    active: true,
    email
      :
      "ashok@renci.org",
    firstName
      :
      "Ashok",
    fullName
      :
      "Ashok Krishnamurthy",
    lastName
      :
      "Krishnamurthy",
    photoData
      :
      "https://radx-images.s3.amazonaws.com/ashok_krishnamurthy_83f4cde9ac.jpeg",
    pid
      :
      "720441075",
    personId: "_5SMp4qd1tUKnpfA_niwgnQ",
    slug
      :
      "ashok-krishnamurthy",
    title
      :
      "Interim Director of RENCI"
  }, {
    active
      :
      true,
    email
      :
      "asia@renci.org",
    firstName
      :
      "Asia",
    fullName
      :
      "Asia Mieczkowska",
    lastName
      :
      "Mieczkowska",
    photoData
      :
      "https://radx-images.s3.amazonaws.com/mieczkowska_asia_c5aaf7ad4f.png",
    pid
      :
      "708744185",
    personId: "_0KDiHdVaskGZmHbyoVs4Yg",
    slug
      :
      "asia-mieczkowska",
    title
      :
      "Interim Chief Operations Officer"
  }]

  return {ood: ood, people: payload};
};
