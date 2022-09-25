import { explorePublicationsRequest } from "../queries/publication/explore_publications";

export const getPopularPosts = async () => {
  const response = await explorePublicationsRequest({
    sortCriteria: "LATEST",
    publicationTypes: ["POST", "MIRROR"],
    limit: 10,
  });

  return response.explorePublications.items;
};
