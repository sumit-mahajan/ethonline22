import { getDefaultProfileRequest } from "../queries/profile/default_profile";
import { getProfilesRequest } from "../queries/profile/get_profiles";

export const getProfiles = async (address) => {
  const ownedBy = [address];

  const profilesFromOwner = await getProfilesRequest({ ownedBy });

  console.log("profiles: result", profilesFromOwner);

  return profilesFromOwner;
};

export const getDefaultProfile = async (address) => {
  const ethereumAddress = address;

  const defaultProfile = await getDefaultProfileRequest({ ethereumAddress });

  console.log("default profile: result", defaultProfile);

  return defaultProfile;
};
