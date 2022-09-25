import { getDefaultProfileRequest } from "../queries/profile/default_profile";
import { getProfilesRequest } from "../queries/profile/get_profiles";
import { createProfileRequest } from "../queries/profile/create_profile";
import { exploreProfilesRequest } from "../queries/profile/explore_profiles";

export const getProfiles = async (address) => {
  const ownedBy = [address];

  const profilesFromOwner = await getProfilesRequest({ ownedBy });

  return profilesFromOwner;
};

export const getDefaultProfile = async (address) => {
  const ethereumAddress = address;

  const defaultProfile = await getDefaultProfileRequest({ ethereumAddress });

  return defaultProfile;
};

export const createProfile = async (handle, profilePictureUri) => {
  const result = await createProfileRequest({
    handle,
    profilePictureUri,
  });

  return result;
};

export const getPopularProfiles = async () => {
  const response = await exploreProfilesRequest({
    sortCriteria: "MOST_FOLLOWERS",
  });

  return response.exploreProfiles.items;
};
