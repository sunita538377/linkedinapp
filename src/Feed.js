import React, { useEffect,useState } from "react";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./style/feed.css";
import Post from "./Post";



const Feed = () => {
   const [feedData,setFeedData]=useState({});

  useEffect(() => {
    async function getData(){
      try {
        const responce = await fetch(
          "https://academics.newtonschool.co/api/v1/linkedin/post",
          {
            headers: {
              "projectID": "f104bi07c490",
            },
          }
        );
         const res = await responce.json();
        // console.log(res.data);
        setFeedData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
     
    }
    getData();
  },[]);
 console.log("sunita",feedData);
  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar />
          <form>
            <input type="text" placeholder="Start a post" />
            <input type="submit" />
          </form>
        </div>

        <div className="feed__option">
          <div className="option">
            <InsertPhotoIcon style={{ color: "70b5f9" }} />
            <span>Photo</span>
          </div>

          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>

          <div className="option">
            <TodayIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>

          <div className="option">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>
      {feedData?.data?.map((post, index) => {
        console.log("post.name", post);
        return (
          <Post
            key={index}
            userName={post?.author?.name}
            caption={post?.content}
            imageUrl={post?.channel?.image}
            likeCount={post?.likeCount}
            commentCount = {post?.commentCount}
            postId ={post._id}
          />
        );
      })}
    </div>
  );
};


export default Feed;
