import Box from "../utils/Box";
import FilledButton from "../filled_button/FilledButton";
import "./post_input_box.css";
import { uploadImage, uploadMetadata } from "../../utils/ipfs_service";
import { useState } from "react";
import { createPost } from "../../api/publications";
import { v4 as uuidv4 } from "uuid";
import { useConnection } from "../../utils/connection_service";

function PostInputBox({ isPost, onAttachClick }) {
  const [ipfsStatus, setIpfsStatus] = useState("");
  const [imageCID, setImageCID] = useState("");
  const [error, setError] = useState("");

  const { currProfile } = useConnection();

  const onFileChange = async (event) => {
    setError("");
    setIpfsStatus("Uploading image to IPFS...");
    setImageCID(await uploadImage(event.target.files[0]));
    setIpfsStatus("Image uploaded to IPFS");
  };

  const onPost = async (e) => {
    e.preventDefault();
    if (ipfsStatus === "Uploading image to IPFS...") return;

    setError("");

    if (e.target.content.value === "" && imageCID === "") {
      setError("No content/image provided");
    }

    try {
      const metadata = {
        version: "1.0.0",
        mainContentFocus: imageCID ? "IMAGE" : "TEXT_ONLY",
        metadata_id: uuidv4(),
        description: e.target.content.value,
        locale: "en-US",
        content: e.target.content.value,
        external_url: null,
        image: imageCID && "ipfs://" + imageCID,
        imageMimeType: imageCID && "image/png",
        name: "Name",
        attributes: [],
        tags: ["using_api_examples"],
        appId: "api_examples_github",
      };

      setIpfsStatus("Uploading metadata to IPFS...");

      const metadataCID = await uploadMetadata(metadata);

      setIpfsStatus("Metadata uploaded to IPFS");

      console.log(currProfile.id, metadataCID);

      const res = await createPost(currProfile.id, metadataCID);

      console.log(res);

      e.target.reset();

      setIpfsStatus("Post Created");
    } catch (err) {
      console.log(err);
      setError("Sorry, Can't Post");
    }
  };

  return (
    <>
      <div className="input-box">
        <form autoComplete="off" spellCheck="false" onSubmit={onPost}>
          <textarea
            name="content"
            className="common-text"
            placeholder={
              isPost ? "What's on your mind?" : "What do you think about this?"
            }
          ></textarea>

          <Box height={10} />

          <div className="flex justify-between items-center">
            <div className=" flex justify-between items-center">
              <div
                className="icon hover:cursor-pointer"
                onClick={() => {
                  document.getElementById("post-inp").click();
                }}
              ></div>
              <input
                id="post-inp"
                onChange={onFileChange}
                style={{ display: "none" }}
                type="file"
              />
              <Box width="10" />
              <p className="subtitle-text">
                {error ? (
                  <span className="text-rose-600">{error}</span>
                ) : (
                  ipfsStatus
                )}
              </p>
            </div>

            <FilledButton
              text={isPost ? "Post" : "Comment"}
              onclick={() => {
                document.getElementById("post-btn").click();
              }}
            />
            <button
              style={{ display: "none" }}
              id="post-btn"
              type="submit"
            ></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostInputBox;
