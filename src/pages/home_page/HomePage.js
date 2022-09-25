import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPopularProfiles } from "../../api/profiles";
import { getPopularPosts } from "../../api/publications";
import FollowListTile from "../../components/follow_list_tile/FollowListTile";
import Loading from "../../components/loading/Loading";
import Post from "../../components/post/Post";
import PostInputBox from "../../components/post_input_box/PostInputBox";
import SideMenuItem from "../../components/side_menu_item/SideMenuItem";
import Box from "../../components/utils/Box";
import { useConnection } from "../../utils/connection_service";
import { parseDate } from "../../utils/helpers";
import "./home_page.css";

function HomePage() {
  const { isLoggedIn, accounts, currProfile } = useConnection();

  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Redirection code
    if (sessionStorage.getItem("login") === "true") return;
    const isConnected = accounts[0];

    if (!isConnected) {
      navigate("/");
    } else if (isConnected && isLoggedIn && !currProfile) {
      navigate("/chooseprofile");
    }
  }, [accounts]);

  useEffect(() => {
    // Fetch code
    async function fetch() {
      setLoading(true);
      setPosts(await getPopularPosts());
      setProfiles(await getPopularProfiles());
      console.log(currProfile);
      setLoading(false);
    }
    fetch();
  }, []);

  if (isLoading) {
    return <Loading message={"Loading your feed"} />;
  }

  return (
    <>
      <Box height={90} />
      <div className="flex container">
        <div className="gap"></div>
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

          <hr />
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Post
                  profileImage={
                    post.profile.picture &&
                    post.profile.picture.original &&
                    post.profile.picture.original.url
                  }
                  profileName={post.profile.name}
                  profileHandle={post.profile.handle}
                  time={parseDate(post.createdAt)}
                  caption={post.metadata.content}
                  image={
                    post.metadata.media[0] &&
                    post.metadata.media[0].original &&
                    post.metadata.media[0].original.mimeType &&
                    post.metadata.media[0].original.mimeType.includes(
                      "image"
                    ) &&
                    post.metadata.media[0].original.url
                  }
                  actionData={{
                    ...post.stats,
                    totalAmountOfReactions: 0,
                  }}
                />
                <hr />
              </div>
            );
          })}

          <Box height={50} />
        </main>

        <aside className="search-profiles">
          <p className="subtitle-text">Recommended Profiles</p>
          {profiles.map((profile, idx) => {
            if (idx < 3)
              return (
                <div key={profile.id}>
                  <Box height="15" />
                  <FollowListTile
                    name={"@" + profile.handle}
                    bio={profile.bio}
                    onFollow={() => {}}
                  />
                </div>
              );
          })}
        </aside>
      </div>
    </>
  );
}

export default HomePage;
