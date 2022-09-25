import { formatImage } from "../../utils/helpers";
import Box from "../utils/Box";
import "./post.css";

function Post({
  profileImage,
  profileName,
  profileHandle,
  time,
  caption,
  image,
  actionData,
}) {
  return (
    <>
      <div className="flex cursor-pointer hover:bg-gray-300 post-card">
        {/* {profileImage ? (
          <div className="v-circle-lg">
            <img
              className="post-profile-img"
              src={formatImage(profileImage)}
              alt="Profile Picture"
            />
          </div>
        ) : ( */}
        <div className="v-circle-lg"></div>
        {/* )} */}

        <Box width={25} />

        <div className="post-info">
          <p className="name title-text">
            {profileName} &nbsp;
            <span className="handle subtitle-text">
              @{profileHandle} · {time}
            </span>
          </p>

          <Box height={5} />
          <p className="caption common-text">{caption}</p>

          {image && (
            <>
              <Box height={5} />
              <div className="image-box">
                <img className="post-img" src={formatImage(image)} alt="Post" />
              </div>
            </>
          )}
          <Box height={20} />

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">
                {actionData.totalAmountOfReactions != 0 &&
                  actionData.totalAmountOfReactions}
              </div>
            </div>
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">
                {actionData.totalAmountOfComments != 0 &&
                  actionData.totalAmountOfComments}
              </div>
            </div>
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">
                {actionData.totalAmountOfMirrors != 0 &&
                  actionData.totalAmountOfMirrors}
              </div>
            </div>
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">
                {actionData.totalAmountOfCollects != 0 &&
                  actionData.totalAmountOfCollects}
              </div>
            </div>

            <Box width={5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
