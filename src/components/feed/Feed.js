import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./feed.css";
import Post from "../post/Post";
import { toast } from "react-toastify";

const Feed = ({fed}) => {
  const [feedData, setFeedData] = useState({});
  const [textValue, setTextValue] = useState("");
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log("file", file);
    setImageURL(URL.createObjectURL(file));
    setImage(file);
  };

  useEffect(() => {
    async function getData() {
      try {
        const responce = await fetch(
          "https://academics.newtonschool.co/api/v1/linkedin/post",
          {
            headers: {
              projectID: "f104bi07c410",
            },
          }
        );
        const res = await responce.json();
       setFeedData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  const addPost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("linkedin-token");
    var myHeaders = new Headers();
    myHeaders.append("projectID", "f104bi07c410");
    myHeaders.append("Authorization", "Bearer " + token);

    var formdata = new FormData();
    formdata.append("title", "title");
    formdata.append("content", textValue);
    formdata.append("images", image);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    const resp = await fetch(
      "https://academics.newtonschool.co/api/v1/linkedin/post/",
      requestOptions
    )
      .then(async (response) => {
        const res = await response.json();
        console.log("status", res);
        if (res.status === "success") {
          setTextValue("");
          setImage(null);
          setImageURL(null);
          toast.success(res.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error(res.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        return response;
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar />
          <form>
            <input type="text" placeholder="Start a post" value={textValue}
          onChange={(e) => {
            e.preventDefault();
            setTextValue(e.target.value);
          }}/>
            <input type="submit" onClick={addPost}/>
          </form>
        </div>

        <div className="feed__option">
          <div className="option">
            <label htmlFor="file">
              <input type="file" id="file" onChange={handleImageChange}/>
              <span>
                <InsertPhotoIcon style={{ color: "70b5f9" }} /> Photo
              </span>
            </label>
          </div>

          <div className="option">
            <label htmlFor="file">
              <input type="file" id="file" onChange={handleImageChange}/>
              <span>
                <YouTubeIcon style={{ color: "#7fc15e" }} /> Video
              </span>
            </label>
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
        {image && (
        <div className="feed__postimg">
          <img src={imageURL} alt="Preview" />
        </div>
         )}
      </div>
      {fed?(fed?.data?.map((post, index) => {
        return (
          <Post
            key={index}
            userName={post?.author?.name}
            caption={post?.content}
            imageUrl={post?.channel?.image}
            likeCount={post?.likeCount}
            commentCount={post?.commentCount}
            postId={post._id}
          />
        );
      })):(feedData?.data?.map((post, index) => {
        return (
          <Post
            key={index}
            userName={post?.author?.name}
            caption={post?.content}
            imageUrl={post?.channel?.image}
            likeCount={post?.likeCount}
            commentCount={post?.commentCount}
            postId={post._id}
          />
        );
      }))}
    </div>
  );
};

export default Feed;
