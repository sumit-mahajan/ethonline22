import { executeQuery } from "../../utils/api_service";

export const exploreProfilesRequest = (request) => {
  return executeQuery(EXPLORE_PROFILES, request);
};

const EXPLORE_PROFILES = `query($request: ExploreProfilesRequest!) {
    exploreProfiles(request: $request) {
      items {
        id
        name
        bio
        isDefault
        attributes {
          displayType
          traitType
          key
          value
        }
        followNftAddress
        metadata
        handle
        picture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            chainId
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
        }
        coverPicture {
          ... on NftImage {
            contractAddress
            tokenId
            uri
            chainId
            verified
          }
          ... on MediaSet {
            original {
              url
              mimeType
            }
          }
        }
        ownedBy
        dispatcher {
          address
          canUseRelay
        }
        stats {
          totalFollowers
          totalFollowing
          totalPosts
          totalComments
          totalMirrors
          totalPublications
          totalCollects
        }
        followModule {
          ... on FeeFollowModuleSettings {
            type
            contractAddress
            amount {
              asset {
                name
                symbol
                decimals
                address
              }
              value
            }
            recipient
          }
          ... on ProfileFollowModuleSettings {
          type
          }
          ... on RevertFollowModuleSettings {
          type
          }
        }
      }
      pageInfo {
        prev
        next
        totalCount
      }
    }
  }`;
