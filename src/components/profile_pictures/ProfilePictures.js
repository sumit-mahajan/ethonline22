import ToggleFollowButton from "../toggle_follow_button/ToggleFollowButton";
import Box from "../utils/Box";
import "./profile_pictures.css";

function ProfilePictures({
  profileImage = "",
  coverImage = "",
  isFollowReqd = false,
}) {
  return (
    <>
      <div className="parent-container">
        <div className="cover-image">
          <div className="profile-image"></div>
        </div>

        <Box height={100} />

        {isFollowReqd && (
          <div className="follow-div">
            <ToggleFollowButton />
          </div>
        )}
      </div>
    </>
  );
}

export default ProfilePictures;
