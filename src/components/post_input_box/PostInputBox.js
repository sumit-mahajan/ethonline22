import Box from "../utils/Box";
import FilledButton from "../filled_button/FilledButton";
import "./post_input_box.css";

function PostInputBox({ isPost }) {
  return (
    <>
      <div className="input-box">
        <textarea
          className="common-text"
          placeholder={
            isPost ? "What's on your mind?" : "What do you think about this?"
          }
        ></textarea>

        <Box height={10} />

        <div className="flex justify-between items-center">
          <div className=" flex justify-between items-center">
            <div className="icon"></div>
            <Box width="10" />
            <div className="icon"></div>
          </div>

          <FilledButton text={isPost ? "Post" : "Comment"} onclick={() => {}} />
        </div>
      </div>
    </>
  );
}

export default PostInputBox;
