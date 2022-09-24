import { getProfiles, getDefaultProfile } from "../api/profiles";
import FilledButton from "../components/filled_button/FilledButton";
import { getAddressFromENS } from "../utils/ethers_service";

// Active Lens address to test 0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3

function TestNewComponent() {
  return (
    <>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <FilledButton
          text={"Default Profile"}
          onclick={() => {
            getDefaultProfile("0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3");
          }}
        />
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
