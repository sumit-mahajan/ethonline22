import { followRequest } from "../queries/interactions/follow";

export const follow = async (profile) => {
  const result = await followRequest({
    follow: [
      {
        profile,
        followModule: null,
      },
    ],
  });

  console.log(result);

  return result;
};
