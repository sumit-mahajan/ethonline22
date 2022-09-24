import "./toggle_follow_button.css";

function ToggleFollowButton({ isFollowing, onFollow, onUnFollow }) {
  return (
    <>
      <div
        className={isFollowing ? "unfollow-btn btn" : "follow-btn btn"}
        onClick={() => {
          if (isFollowing) {
            onUnFollow();
          } else {
            onFollow();
          }
        }}
      >
        <p className="btn-txt">{isFollowing ? "Unfollow" : "Follow"}</p>
      </div>
    </>
  );
}

export default ToggleFollowButton;
