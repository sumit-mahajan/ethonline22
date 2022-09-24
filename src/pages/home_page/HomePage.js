import FollowListTile from "../../components/follow_list_tile/FollowListTile";
import Post from "../../components/post/Post";
import PostInputBox from "../../components/post_input_box/PostInputBox";
import Box from "../../components/utils/Box";
import "./home_page.css";

function HomePage() {
  return (
    <>
      <Box height={30} />
      <div className="flex container">
        <aside className="menus">
          <p className="subtitle">Home</p>
          <Box height={15} />

          <p className="subtitle">Profile</p>
          <Box height={15} />
          <p className="subtitle">About</p>
        </aside>

        <main className="center-content">
          <Box height={5} />
          <PostInputBox isPost={true} />
          <Box height={20} />

          <hr />
          <Box height={20} />
          <Post
            profileName={"Sumit Mahajan"}
            profileHandle={"sumit.lens"}
            time={"15h"}
            caption="I love GetX. It’s the best state management system on the planet.
  Flutter has no state primitives. It's never confusing and there are no edge cases."
            image={"something"}
          />
          <Box height={50} />
        </main>

        <aside className="search-profiles">
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
    </>
  );
}

export default HomePage;
