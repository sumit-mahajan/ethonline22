import Box from "../utils/Box";
import "./post.css";

function Post({
  profileImage = "",
  profileName,
  profileHandle,
  time,
  caption,
  image,
  actionData = "",
}) {
  return (
    <>
      <div className="flex">
        <div className="v-circle-lg"></div>

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
              <div className="image-box"></div>
            </>
          )}
          <Box height={20} />

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">10</div>
            </div>
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">2</div>
            </div>
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">3</div>
            </div>
            <div className="flex items-center">
              <div className="icon"></div>
              <Box width={10} />
              <div className="common-text">6</div>
            </div>

            <Box width={5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
