import { login } from "../api/login";
import {
  getProfiles,
  getDefaultProfile,
  createProfile,
  getPopularProfiles,
  getProfile,
} from "../api/profiles";
import {
  createPost,
  getPopularPosts,
  getPostById,
  getPostsByProfileId,
} from "../api/publications";
import FilledButton from "../components/filled_button/FilledButton";
import { useConnection } from "../utils/connection_service";
import { getAddressFromENS } from "../utils/ethers_service";
import { uploadImage, uploadMetadata } from "../utils/ipfs_service";
import ChooseProfilePage from "./choose_profile_page/ChooseProfilePage";
import { v4 as uuidv4 } from "uuid";
import { follow } from "../api/interactions";

// Active Lens address to test 0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3
// Sample profileId 0x487b
// My Profile picture hash bafybeiaecmcgtmun747epf5mznqqfoglfn7rniq5lnmq564x3hqjwqqneq
// Uploaded post Id 4a1bd977-eeab-43e8-8d87-cfa8ff26d3ce

function TestNewComponent() {
  const { accounts, currProfile } = useConnection();

  const onFileChange = async (event) => {
    console.log(await uploadImage(event.target.files[0]));
  };

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <FilledButton
          text={"Create Post"}
          onclick={async () => {
            const metadata = {
              version: "1.0.0",
              mainContentFocus: "IMAGE",
              metadata_id: uuidv4(),
              description:
                "I love GetX. It’s the best state management system on the planet. Flutter has no state primitives. It's never confusing and there are no edge cases.",
              locale: "en-US",
              content:
                "I love GetX. It’s the best state management system on the planet. Flutter has no state primitives. It's never confusing and there are no edge cases.",
              external_url: null,
              image:
                "ipfs://bafybeiaecmcgtmun747epf5mznqqfoglfn7rniq5lnmq564x3hqjwqqneq",
              imageMimeType: "image/png",
              name: "Name",
              attributes: [],
              tags: ["using_api_examples"],
              appId: "api_examples_github",
            };

            const metadataCID = await uploadMetadata(metadata);

            console.log(metadataCID);

            createPost(
              "0x4863", //sumit1.test
              "ipfs://" + metadataCID
            );
          }}
        />
        <FilledButton
          text={"Follow"}
          onclick={async () => {
            console.log(await follow("0x4863"));
          }}
        />
        {/* <FilledButton
          text={"Get Post By Id"}
          onclick={async () => {
            console.log(
              await getPostById("4a1bd977-eeab-43e8-8d87-cfa8ff26d3ce")
            );
          }}
        /> */}
        {/* <FilledButton
          text={"Get Posts for Profile"}
          onclick={async () => {
            console.log(await getPostsByProfileId("0x4863"));
          }}
        /> */}
        {/* <div>
          <input
            id="inp"
            onChange={onFileChange}
            style={{ display: "none" }}
            type="file"
          />
          <FilledButton
            text={"Upload to IPFS"}
            onclick={() => {
              document.getElementById("inp").click();
            }}
          />
        </div> */}

        {/* <FilledButton
          text={"GET ENS Address"}
          onclick={() => {
            getAddressFromENS("sha.eth");
          }}
        /> */}
      </div>
    </>
  );
}

export default TestNewComponent;

/* <InfoField
          id="address"
          label={"Address"}
          value="0x3EE8d84ad9082DeC4fc9dEadAB3A63B4AfecF87d"
        /> */

// <FollowListTile
//           name="Sumit Mahajan"
//           bio="I love GetX. It’s the best state management system on the planet."
//           onFollow={() => {}}
//         />

// <Post
//   profileName={"Sumit Mahajan"}
//   profileHandle={"sumit.lens"}
//   time={"15h"}
//   caption="I love GetX. It’s the best state management system on the planet.
//   Flutter has no state primitives. It's never confusing and there are no edge cases."
//   image={"something"}
// />
