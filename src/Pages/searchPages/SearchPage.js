import React from "react";
import Post from "../../components/post/Post";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

const SearchPage = () => {
  const location = useLocation();
  const searchReasult = location.state && location.state.searchResults;
  console.log(searchReasult);

  return (
    <div>
      <Header />
      <div style={{ display: "flex",paddingLeft:"250px"}}>
        <div>
        <Sidebar  />
        </div>
        {searchReasult?.data?.map((post, index) => {
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
        })}
        <div style={{paddingLeft:"250px" }}>
        <Widget  />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
