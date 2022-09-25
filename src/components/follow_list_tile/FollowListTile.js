import { formatImage } from "../../utils/helpers";
import ToggleFollowButton from "../toggle_follow_button/ToggleFollowButton";
import Box from "../utils/Box";
import "./follow_list_tile.css";

function FollowListTile({ image, name, bio, onFollow }) {
  return (
    <>
      <div className="flex justify-between items-center hover:cursor-pointer">
        {image ? (
          <div className="v-circle">
            <img
              className="profile-profile-img"
              src={formatImage(image)}
              alt="Profile Picture"
            />
          </div>
        ) : (
          <div className="v-circle"></div>
        )}

        <Box width="15" />

        <div className="profile-info">
          <p className="name title-text">{name}</p>

          <p className="bio common-text">{bio}</p>
        </div>

        <Box width="15" />

        <ToggleFollowButton />
      </div>
    </>
  );
}

export default FollowListTile;
