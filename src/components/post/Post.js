import React, { useState } from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import Comments from "../comments/Comments";

const Post = ({
  userName,
  caption,
  imageUrl,
  postId,
  likeCount,
  commentCount,
}) => {
  const [openComment, setOpenComment] = useState(false);

  const commentHandler = () => {
    setOpenComment(!openComment);
  };

  //    const [likes, setLikes] = useState(0);

  // useEffect(() => {
  //    const fetchLikes = async () => {
  //       try {
  //         const response = await fetch("https://academics.newtonschool.co/api/v1/linkedin/like/:postId", {
  //          headers: {
  //             "projectID": "f104bi07c490",
  //           },
  //         });
  //         const data = await response.json();
  //         setLikes(data.likes);
  //       } catch (error) {
  //         console.error('Error fetching likes:', error);
  //       }
  //     };

  //     fetchLikes();
  //   }, []);
  const likeHandle = async (postId) => {
    const token = localStorage.getItem("facebook-token");
    const id = postId;
    console.log("id", id);
    try {
      const liked = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/like/${postId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            projectID: "f104bi07c490",
          },
        }
      );
      // if (liked.status === "success") {
      const res = await liked.json();
      console.log("liked", res);

      if (res.status === "success") {
        toast.success(res.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error while liking:", error);
      toast.error("An error occurred while processing your request.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="posts" key={postId}>
      <div className="post__header">
        <div className="post__headerLeft">
          <Avatar src={imageUrl} alt="" />
          <div className="post__profile__details">
            <h3>{userName}</h3>
            <p>We are learning react js</p>
          </div>
        </div>

        <MoreHorizIcon style={{ cursor: "pointer" }} />
      </div>
      <div className="post__body">
        <p>{caption}</p>
      </div>
      <div className="like__count">
        <h5>{likeCount} likes</h5>
        <h5>{commentCount} comments</h5>
      </div>
      <div className="post__footer">
        <div className="footer__options" onClick={() => likeHandle(postId)}>
          <ThumbUpIcon />
          <span>Like</span>
        </div>

        <div className="footer__options" onClick={commentHandler}>
          <CommentIcon />
          <span>Comment</span>
        </div>

        <div className="footer__options">
          <ShareIcon />
          <span>Share</span>
        </div>

        <div className="footer__options">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>
      {openComment && <Comments postId={postId} />}
    </div>
  );
};

export default Post;
