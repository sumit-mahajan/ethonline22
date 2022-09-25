import { executeMutation } from "../../utils/api_service";

const CREATE_PROFILE = `mutation($request: CreateProfileRequest!) {
    createProfile(request: $request) {
      ... on RelayerResult {
        txHash
      }
      ... on RelayError {
        reason
      }
      __typename
    }
}`;

export const createProfileRequest = async (request) => {
  return await executeMutation(CREATE_PROFILE, request);
};
