import ToggleFollowButton from "../components/toggle_follow_button/ToggleFollowButton";

function TestNewComponent() {
  return (
    <>
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <ToggleFollowButton isFollowing={true} />
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
