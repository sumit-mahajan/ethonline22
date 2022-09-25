import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FollowListTile from "../../components/follow_list_tile/FollowListTile";
import Post from "../../components/post/Post";
import PostInputBox from "../../components/post_input_box/PostInputBox";
import SideMenuItem from "../../components/side_menu_item/SideMenuItem";
import Box from "../../components/utils/Box";
import { useConnection } from "../../utils/connection_service";
import "./home_page.css";

function HomePage() {
  const { isLoggedIn, accounts, currProfile } = useConnection();

  const navigate = useNavigate();

  useEffect(() => {
    const isConnected = accounts[0];

    if (!isConnected) {
      navigate("/");
    } else if (isConnected && isLoggedIn && !currProfile) {
      navigate("/chooseprofile");
    }
  }, [accounts]);

  return (
    <>
      <Box height={30} />
      <div className="flex container">
        <aside className="menus">
          <SideMenuItem text={"Home"} linkTo="/home" isActive={true} />
          <Box height={15} />

          <SideMenuItem
            text={"Profile"}
            linkTo={"/profile/1"}
            isActive={false}
          />
          <Box height={15} />
          <SideMenuItem text={"About"} linkTo="/about" isActive={false} />
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
