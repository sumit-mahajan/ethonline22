import { createPostRequest } from "../queries/publication/create_post";
import { explorePublicationsRequest } from "../queries/publication/explore_publications";
import { getPublications } from "../queries/publication/get_publications";

export const getPopularPosts = async () => {
  const response = await explorePublicationsRequest({
    sortCriteria: "TOP_COMMENTED",
    publicationTypes: ["POST", "MIRROR"],
    limit: 10,
  });

  return response.explorePublications.items;
};

export const createPost = async (profileId, contentURI) => {
  const result = await createPostRequest({
    profileId,
    contentURI,
    collectModule: {
      freeCollectModule: {
        followerOnly: true,
      },
    },
    referenceModule: {
      followerOnlyReferenceModule: false,
    },
  });

  return result;
};

export const getPostsByProfileId = async (profileId) => {
  const response = await getPublications({
    profileId,
    publicationTypes: ["POST", "COMMENT", "MIRROR"],
    limit: 10,
  });

  return response.publications.items;
};

export const getPostById = async (publicationId) => {
  const response = await getPublications({
    publicationId,
  });

  return response.publication;
};
