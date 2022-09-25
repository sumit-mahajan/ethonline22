import { getDefaultProfileRequest } from "../queries/profile/default_profile";
import { getProfilesRequest } from "../queries/profile/get_profiles";
import { createProfileRequest } from "../queries/profile/create_profile";

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
