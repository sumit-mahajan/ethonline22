import { login } from "../api/login";
import {
  getProfiles,
  getDefaultProfile,
  createProfile,
  getPopularProfiles,
} from "../api/profiles";
import { getPopularPosts } from "../api/publications";
import FilledButton from "../components/filled_button/FilledButton";
import { useConnection } from "../utils/connection_service";
import { getAddressFromENS } from "../utils/ethers_service";
import { uploadImage } from "../utils/ipfs_service";
import ChooseProfilePage from "./choose_profile_page/ChooseProfilePage";

// Active Lens address to test 0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3
// My Profile picture hash bafybeiaecmcgtmun747epf5mznqqfoglfn7rniq5lnmq564x3hqjwqqneq

function TestNewComponent() {
  const { accounts } = useConnection();

  const onFileChange = async (event) => {
    console.log(await uploadImage(event.target.files[0]));
  };

  return (
    <>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        {/* <FilledButton
          text={"Create Profile"}
          onclick={() => {
            createProfile(
              "sumit1",
              "bafybeiaecmcgtmun747epf5mznqqfoglfn7rniq5lnmq564x3hqjwqqneq"
            );
          }}
        /> */}
        <FilledButton
          text={"Popular Profiles"}
          onclick={() => {
            getPopularProfiles();
          }}
        />
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
