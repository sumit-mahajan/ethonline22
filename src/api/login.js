import { signText } from "../utils/ethers_service";
import { generateChallenge } from "../queries/auth/generate_challenge";
import { authenticate } from "../queries/auth/authenticate";
import { verify } from "../queries/auth/verify_jwt";

export const login = async (address) => {
  const exisitingToken = localStorage.getItem("access_token");
  const recentAddress = localStorage.getItem("recent_address");

  if (exisitingToken && recentAddress === address) {
    const response = await verify(exisitingToken);
    if (response.data.verify) {
      return;
    }
  }
  console.log("fasfre");

  // we request a challenge from the server
  const challengeResponse = await generateChallenge(address);

  // sign the text with the wallet
  const signature = await signText(challengeResponse.data.challenge.text);

  const accessTokens = await authenticate(address, signature);

  localStorage.setItem(
    "access_token",
    accessTokens.data.authenticate.accessToken
  );
  localStorage.setItem(
    "refresh_token",
    accessTokens.data.authenticate.refreshToken
  );

  localStorage.setItem("recent_address", address);

  console.log("Logged In");

  sessionStorage.setItem("login", "true");
};
