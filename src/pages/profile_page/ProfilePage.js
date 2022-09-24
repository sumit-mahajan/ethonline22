import FollowListTile from "../../components/follow_list_tile/FollowListTile";
import Post from "../../components/post/Post";
import ProfilePictures from "../../components/profile_pictures/ProfilePictures";
import Box from "../../components/utils/Box";
import "./profile_page.css";

function ProfilePage() {
  return (
    <>
      <main className="container">
        <Box height={30} />
        <ProfilePictures isFollowReqd={true} />

        <Box height={20} />

        <div className="profile-page-info flex justify-between items-end">
          <div className="left">
            <h1 className="profile-name">Sumit Mahajan</h1>

            <p className="subtitle-text">@sumit.lens</p>

            <Box height={20} />

            <p className="common-text">
              Developer | Reader | Building cool things
            </p>

            <Box height={20} />

            <p className="subtitle-text">
              <span className="title-text">7</span>&nbsp; Following &nbsp;
              &nbsp; &nbsp; &nbsp; <span className="title-text">47</span>&nbsp;
              Followers
            </p>
          </div>
          <Box width={50} />
          <div className="right">
            <p className="subtitle-text">0x1012</p>
            <Box height={5} />
            <p className="subtitle-text">sumit07.eth</p>
          </div>
        </div>

        <Box height={20} />

        <hr></hr>

        <Box height={20} />

        <div className="profile-menus flex">
          <p className="subtitle">All Activity</p>

          <Box width={50} />

          <p className="subtitle">Posts</p>

          <Box width={50} />

          <p className="subtitle">Collects</p>
        </div>
        <Box height={30} />

        <div className="flex profile-page-data">
          <section className="center-content">
            <Post
              profileName={"Sumit Mahajan"}
              profileHandle={"sumit.lens"}
              time={"15h"}
              caption="I love GetX. It’s the best state management system on the planet.
  Flutter has no state primitives. It's never confusing and there are no edge cases."
              image={"something"}
            />
            <Box height={50} />
          </section>

          <div className="gap"></div>

          <aside className="suggested-profiles">
            <p className="subtitle-text">Recommended Profiles</p>
            <Box height="15" />
            <FollowListTile
              name="Sumit Mahajan"
              bio="Developer | Reader | Building cool things"
              onFollow={() => {}}
            />
            <Box height="15" />
            <FollowListTile
              name="Sumit Mahajan"
              bio="Developer | Reader | Building cool things"
              onFollow={() => {}}
            />
            <Box height="15" />
            <FollowListTile
              name="Sumit Mahajan"
              bio="Developer | Reader | Building cool things"
              onFollow={() => {}}
            />
          </aside>
        </div>
      </main>
    </>
  );
}

export default ProfilePage;
