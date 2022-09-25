import { executeMutation, executeQuery } from "../../utils/api_service";

export const followRequest = async (request) => {
  return await executeMutation(FOLLOW, request);
};

const FOLLOW = `mutation CreateFollowTypedData {
    createFollowTypedData(request:{
      follow: [
        {
          profile: "0x01",
          followModule: null
        }
      ]
    }) {
      id
      expiresAt
      typedData {
        domain {
          name
          chainId
          version
          verifyingContract
        }
        types {
          FollowWithSig {
            name
            type
          }
        }
        value {
          nonce
          deadline
          profileIds
          datas
        }
      }
    }
  }`;
