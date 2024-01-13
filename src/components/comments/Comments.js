import React, { useEffect, useState } from "react";
import "./comments.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Avatar } from "@mui/material";

const Comments = ({ postId, IncrementCount }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState();

  var key = "content";

  var obj = {};

  obj[key] = commentText;

  useEffect(() => {
    const token = localStorage.getItem("facebook-token");
    const fetchComments = async () => {
      try {
        const response = await fetch(
          ` https://academics.newtonschool.co/api/v1/linkedin/post/${postId}/comments`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              projectID: "f104bi07c410",
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();
        if (res.status === "success") {
          const commentsWithTime = res.data.map((comment) => ({
            ...comment,
            time: comment.createdAt,
          }));
          setComments(commentsWithTime);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };
    fetchComments();
  }, [postId, comments]);
  console.log("comments", comments);

  const commentSend = () => {
    const token = localStorage.getItem("linkedin-token");
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c410");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    var raw = JSON.stringify({
      content: commentText,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://academics.newtonschool.co/api/v1/linkedin/comment/${postId}`,
      requestOptions
    )
      .then((response) => {
        if (response.status === "success") {
          setComments([...comments, response.data.content]);
          toast.success(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error(response.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        IncrementCount();
        return response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="comments">
      <div className="writebox">
        <form action="#">
          <div className="user">
            <Avatar />
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              type="submit"
              className="btn-send btn-primary"
              onClick={(e) => {
                e.preventDefault();
                commentSend();
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      {comments?.map((comment) => (
        <div className="user" key={comment.id}>
          <Link to={"/profile/id"}>
            <Avatar />
          </Link>
          <div>
            <p>{comment.content}</p>
          </div>
          <small style={{ fontSize: "12px" }}>
            {new Date(comment.time).toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
            })}
          </small>
        </div>
      ))}
    </div>
  );
};
export default Comments;
